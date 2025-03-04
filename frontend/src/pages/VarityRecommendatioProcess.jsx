import React from "react";

const VarietyRecommendationProcess = () => {
  const textItems = [
    {
      title: "1. Selection of Parents",
      text: "Description: Parental rice varieties with desirable traits such as high yield, disease resistance, pest tolerance, and grain quality are selected. These traits may also include adaptability to different environmental conditions and consumer preferences like taste or cooking quality. Purpose: To ensure that the resulting hybrid has improved characteristics compared to existing varieties.",
    },
    {
      title: "2. Hybridization",
      text: "Description: Cross-breeding of selected parent varieties is conducted. Pollen from one parent is transferred to the stigma of another, creating a hybrid with genetic material from both parents. Purpose: To combine the desirable traits of both parents in a single plant, aiming to produce a superior hybrid.",
    },
    {
      title: "3. F1 Generation",
      text: "Description: The first generation of plants resulting from the hybridization process. These plants often exhibit heterosis (hybrid vigor), displaying improved growth and yield characteristics. Purpose: To observe initial results of the cross and identify plants with promising traits for further breeding.",
    },
    {
      title: "4. Advanced Generations",
      text: "Description: Successive generations are cultivated to stabilize the hybrid’s genetic traits. Plants with consistent desirable characteristics are selected and propagated further. Purpose: To ensure the final variety has stable and predictable traits.",
    },
    {
      title: "5. Advanced Generations",
      text: "Description: Successive generations are cultivated to stabilize the hybrid’s genetic traits. Plants with consistent desirable characteristics are selected and propagated further. Purpose: To ensure the final variety has stable and predictable traits.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
      {/* Image and Top Text Items */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2">
          <img
            src="/images/variety-recommendation-img.JPG"
            alt="Variety Recommendation"
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col space-y-6">
          {textItems.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-2 bg-primary/70 rounded-2xl px-5 py-2">
                {item.title}
              </h2>
              <p className="text-gray-600 p-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text Items */}
      <div className="space-y-6">
        {textItems.slice(3).map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg mx-auto w-full"
          >
            <h2 className="text-lg font-semibold mb-2 bg-primary/70 rounded-2xl px-5 py-2">
              {item.title}
            </h2>
            <p className="text-gray-600 p-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VarietyRecommendationProcess;