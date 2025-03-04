import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiCrystalBall } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const VarietyPredictionHome = () => {
  const navigate = useNavigate();
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  const historyCards = [
    {
      title: "Ancient Beginnings",
      description:
        "The journey of paddy starts thousands of years ago...The journey of paddy starts The journey of paddy starts thousands of years ago...The journey of paddy starts The journey of paddy starts thousands of years ago...The journey of paddy starts The journey of paddy starts thousands of years ago...The journey of paddy starts The journey of paddy starts thousands of years ago...The journey of paddy starts The journey of paddy starts thousands of years ago...The journey of paddy starts thousands of years ago...The journey of paddy starts thousands of years ago...The journey of paddy starts thousands of years ago...",
    },
    {
      title: "Modern Practices",
      description:
        "Today, ed techniques...Today, ed techniques...Today, ed techniques...Today, ed techniques...Today, ed techniques...",
      img1: "./images/home-img1.jpg",
      img2: "./images/home-img1.jpg",
      img3: "./images/home-img1.jpg",
    },
    {
      title: "Modern Practices",
      description:
        "Today, paddy cultivation incorporates advanced techniques...",
    },
    {
      title: "Modern Practices",
      description:
        "Today, paddy cultivation incorporates advanced techniques...",
    },
  ];

  const cultivationCards = [
    {
      image: "./images/hero-card-img1.jpg",
      title: "rice varieties",
      description:
        "Step-by-step guide to preparing your fields for the best yield.",
      link: "/varieties",
    },
    {
      image: "./images/hero-card-img2.jpg",
      title: "rice variety distribution",
      description: "Choosing the right seeds for your paddy fields.",
      link: "/cultivation/seed-selection",
    },
    {
      image: "./images/hero-card-img3.png",
      title: "rice recommendation process",
      description: "Techniques to manage your crops effectively.",
      link: "/cultivation/crop-management",
    },
    {
      image: "./images/hero-card-img4.jpg",
      title: "paddy calender crop",
      description: "Best practices for a fruitful harvest.",
      link: "/cultivation/harvesting-tips",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative"
        style={{
          height: `calc(100vh - ${navbarHeight}px)`,
          position: "relative",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `url('/images/home-img1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scaleX(-1)", // Flip the image horizontally
            zIndex: 0,
          }}
        />
        <div className="absolute inset-0 " />
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 flex flex-col justify-start items-start h-full space-y-8 pt-20">
          <div className="max-w-lg space-y-3 m-5">
          <h2 className="text-3xl font-bold text-white uppercase text-shadow1">
              Welcome To:
            </h2>
            <h1 className="text-7xl font-bold text-white uppercase text-shadow1">
              Variety Genie
            </h1>
            <p className="text-xl text-gray-100/90 leading-relaxed pt-2 pb-7">
              Partner of Predicting BestSuite Variety to Grow
            </p>
            <div className="flex">
              <button
                onClick={() => navigate("/variety-input")}
                type="submit"
                className="flex items-center gap-2 py-3 px-12 -mt-6 bg-darkyellow transition-all duration-300 hover:scale-105 hover:bg-darkgreen/80 text-white font-bold text-xl rounded-lg">
                <GiCrystalBall className="text-black text-2xl !hover:text-black" />
                VARIETY PREDICTION
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <p className="text-lg text-gray-100/90 bg-black p-10 italic font-medium leading-relaxed text-center">
            Find the Perfect Match for Your Paddy Fields With Sri Lanka's
            recommended rice varieties, expertly tailored to thrive in the
            island's diverse climates and soils. Let science empower your next
            harvest.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="py-24">
        <h2 className="text-4xl text-center font-bold text-darkgreen p-10 bg-darkgreen/5">
          History of Paddy
        </h2>
        <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12 ">
          {historyCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-2xl border border-green-700/20 shadow-lg bg-primary/20"
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-4 text-shadow">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-10">
                {item.description}
              </p>
              <div className="flex gap-4 p-10">
                <img
                  src={item.img1}
                  alt=""
                  className="w-20 h-auto rounded-lg"
                />
                <img
                  src={item.img1}
                  alt=""
                  className="w-20 h-auto rounded-lg"
                />
                <img
                  src={item.img1}
                  alt=""
                  className="w-20 h-auto rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cultivation Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-4xl font-semibold text-green-700">
              Cultivation Practices
            </h2>
            <p className="text-lg text-gray-700">
              Preparing your fields, nurturing crops, and planning for harvest
              is an art.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {cultivationCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-green-700/20 shadow-lg hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <img
                  src={card.image}
                  alt={card.image}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />
                <h3 className="text-xl font-semibold text-green-700 text-center mb-4">
                  {card.title}
                </h3>
                <p className="text-md text-gray-700 text-center mb-6">
                  {card.description}
                </p>
                <div className="flex justify-center mt-auto">
                  <a
                    href={card.link}
                    className="bg-green-700 hover:bg-green-800 text-white capitalize py-2 px-8 rounded-lg text-sm font-bold shadow-md transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VarietyPredictionHome;
