import React, { useState, useEffect, useRef } from "react";
import { parse, stringify } from "svgson"; // Import both parse and stringify
import SriLankaMap from "../assets/lk.svg"; // Adjust the path to your SVG file

const hoverTexts = {
  LK53: "Trincomalee - ත්‍රිකුණාමළය",
  LK45: "Mulativ - මුලතිව්",
  LK41: "Jaffna - යාපනය",
  LK42: "Kilinochchi - කිලිනොච්චිය",
  LK43: "Mannar - මන්නාරම",
  LK62: "Puttalam - පුත්තලම",
  LK12: "Gampaha - ගම්පහ",
  LK11: "Colombo - කොළඹ",
  LK13: "Kalutara - කළුතර",
  LK31: "Galle - ගාල්ල",
  LK32: "Matara - මාතර",
  LK33: "Hambantota - හම්බන්තොට",
  LK52: "Ampara - අම්පාර",
  LK51: "Maddakalapuwa - මඩකලපුව",
  LK91: "Ratnapura - රත්නපුර",
  LK82: "Monaragala - මොනරාගල",
  LK92: "Kegalle - කෑගල්ල",
  LK81: "Badulla - බදුල්ල",
  LK22: "Matale - මාතලේ",
  LK72: "Pollonnaruwa - පොළොන්නරුව",
  LK61: "Kurunegala - කුරුණෑගල",
  LK71: "Anuradhapura - අනුරාධපුර",
  LK23: "Nuwara Eliya - නුවරඑලිය",
  LK44: "Vavuniya - වව්නියාව",
  LK21: "Mahanuwara - මහනුවර",
};

const Map = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [hoverText, setHoverText] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [scale, setScale] = useState(1); // State for zoom scale
  const containerRef = useRef(null); // Reference to the container

  useEffect(() => {
    fetch(SriLankaMap)
      .then((response) => response.text())
      .then((data) => {
        parseSVG(data);
      });
  }, []);

  const parseSVG = async (svgText) => {
    const svgObj = await parse(svgText);
    const svgWithEvents = addEventHandlers(svgObj);
    const svgString = stringify(svgWithEvents); // Convert back to string
    setSvgContent(svgString);

    // Add event listeners after rendering the SVG
    setTimeout(() => {
      document.querySelectorAll("path").forEach((path) => {
        path.addEventListener("mouseenter", () => handleMouseEnter(path.id));
        path.addEventListener("mouseleave", handleMouseLeave);
      });
    }, 100);
  };

  const addEventHandlers = (svgObj) => {
    svgObj.children.forEach((node) => {
      if (node.name === "path" && node.attributes.id) {
        node.attributes.onMouseEnter = `handleMouseEnter('${node.attributes.id}')`;
        node.attributes.onMouseLeave = "handleMouseLeave()";
      }
    });
    return svgObj;
  };

  const fetchRiceVarieties = async (districtName) => {
    const response = await fetch(
      `http://127.0.0.1:8000/rice-details/rice-varieties/${districtName}`
    );
    const data = await response.json();
    return data.join(", "); // Convert the array to a string
  };

  const handleMouseEnter = async (districtId) => {
    setHoveredDistrict(districtId);
    // Change color of the hovered district
    const districtElement = document.getElementById(districtId);
    if (districtElement) {
      districtElement.style.fill = "#123456"; // Set your desired hover color
    }

    // Get district name from hoverTexts
    const districtName = hoverTexts[districtId].split(" -")[0];

    // Fetch and set rice varieties for the district
    const varieties = await fetchRiceVarieties(districtName);
    setHoverText(`${hoverTexts[districtId]} | Rice Varieties: ${varieties}`);
  };

  const handleMouseLeave = () => {
    setHoveredDistrict(null);
    setHoverText("");
    // Reset color of the hovered district
    document.querySelectorAll("path").forEach((path) => {
      path.style.fill = ""; // Reset to original fill color
    });
  };

  // Handle mouse scroll for zooming
  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    if (e.deltaY < 0) {
      // Scroll up = zoom in
      setScale((prevScale) => Math.min(prevScale + 0.1, 2)); // Limit max zoom
    } else {
      // Scroll down = zoom out
      setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Limit min zoom
    }
  };

  // Add event listeners to prevent page scroll when inside svg-container
  useEffect(() => {
    const handleScroll = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };
    document.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <h2 className="text-center text-3xl pt-5 font-semibold">
        Distract Rice Variety{" "}
      </h2>
      <div className="flex">
        <div
          className="relative w-2/6 items-center overflow-hidden"
          style={{
            width: "",
            height: "80vh",
            overflow: "hidden", // Prevent page scroll
          }}
        >
          <div
            className="svg-container shadow-2xl h-full overflow-hidden bg-gray-200/40 rounded-2xl"
            ref={containerRef}
            onWheel={(e) => {
              if (
                containerRef.current &&
                containerRef.current.contains(e.target)
              ) {
                handleWheel(e); // Zoom map only if the event is inside the map container
              }
            }} // Bind mouse wheel zoom only within the container
          >
            <div
              className="svg-content"
              dangerouslySetInnerHTML={{ __html: svgContent }}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center center", // Zoom from the center of the map
              }}
            />
          </div>
          {hoveredDistrict && (
            <div className="absolute w-96 right-25 top-10 p-2 bg-gray-800/40 text-white border border-gray-300 rounded shadow-lg">
              {hoverText}
            </div>
          )}
        </div>

        <div className="w-4/6 bg-gray-400/20 p-10">
          <h2 className="text-xl">
            Sri Lanka Rice Varieties Across Different Districts
          </h2>
          <div>
            <p className="mt-10">
              Sri Lanka’s rice cultivation is an essential part of its
              agriculture, with different districts producing distinct rice
              varieties suited to local conditions, climate, and soil. The
              country’s rice farming regions range from the dry zones in the
              North and East to the wet zones in the South and Central regions.
              Each district has its own variety of rice, cultivated using
              specific techniques and traditions passed down over generations.
            </p>
            <p className="my-10 text-gray-800">
              Some of the notable rice varieties include:
            </p>

            <p>
              <span className="font-semibold">Nadu:</span> Predominantly grown in the dry zones such as
              Anuradhapura and Polonnaruwa, Nadu rice is used widely in everyday
              meals.
            </p>

            <p>
              <span className="font-semibold">Samba:</span> Popular in districts like Kurunegala and
              Galle, Samba rice is known for its aroma and is typically used for
              special occasions.
            </p>
            <p>
              <span className="font-semibold">Basmati:</span> While not native, Basmati is grown in
              selected districts with the right climate, such as Kandy and
              Nuwara Eliya, and is preferred for its long, fragrant grains.
            </p>
            <p>
              <span className="font-semibold">Red Rice:</span> Grown in areas like Ratnapura and Kegalle,
              Red Rice is known for its nutritional benefits and is a key part
              of traditional Sri Lankan diets. This variety of rice reflects the
              diversity of Sri Lanka’s agricultural regions and is crucial for
              the country's food security and cultural identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
