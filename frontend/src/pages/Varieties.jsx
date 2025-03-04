import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RiceVarietiesPage = () => {
  const [groupedRiceVarieties, setGroupedRiceVarieties] = useState({});
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/rice-details/rice-varieties/by-age-group")
      .then((response) => {
        setGroupedRiceVarieties(response.data);
        const firstGroup = Object.keys(response.data).sort((a, b) => parseFloat(a) - parseFloat(b))[0];
        setSelectedAgeGroup(firstGroup);
      })
      .catch((error) => {
        console.error("Error fetching grouped rice varieties:", error);
      });
  }, []);

  return (
    <div
      className="py-6 min-h-screen"
      style={{
        background: `url('https://static.vecteezy.com/system/resources/previews/037/349/435/non_2x/ai-generated-long-grain-rice-in-a-wooden-bowl-white-rice-spills-out-on-the-wooden-table-food-light-natural-colors-high-quality-ai-generative-photo.jpg')`,
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Recommended Rice Varieties In Sri Lanka <br /> (1958 - 2024)
        </h1>

        {/* Tabs for Age Groups */}
        <div className="flex justify-center mb-6">
          {Object.keys(groupedRiceVarieties)
            .sort((a, b) => parseFloat(a) - parseFloat(b)) // Sort age groups numerically
            .map((ageGroup) => (
              <button
                key={ageGroup}
                onClick={() => setSelectedAgeGroup(ageGroup)}
                className={`px-4 py-2 mx-2 rounded-lg ${
                  selectedAgeGroup === ageGroup
                    ? "bg-darkgreen text-white"
                    : "bg-gray-200 text-gray-700"
                } transition-colors duration-300 ease-in-out`}
              >
                Age Group: {ageGroup}
              </button>
            ))}
        </div>

        {/* Rice Varieties for Selected Age Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-black/80 p-10 rounded-lg">
          {selectedAgeGroup &&
            groupedRiceVarieties[selectedAgeGroup]?.map((variety, index) => (
              <Link
                to={`/variety-details/${variety}`}
                key={index}
                className="bg-darkgreen rounded-lg shadow-lg text-center p-4 text-white font-bold transition-transform transform hover:scale-105 hover:bg-green-800"
              >
                <div className="text-xl">{variety}</div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RiceVarietiesPage;
