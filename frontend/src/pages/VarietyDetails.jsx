import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VarietyDetails = () => {
  const { varietyName } = useParams();
  const [riceDetails, setRiceDetails] = useState(null);

  useEffect(() => {
    const fetchRiceDetails = async () => {  
      try {
        const response = await axios.get(
          `http://localhost:8000/rice-details/${varietyName}`
        );
        setRiceDetails(response.data);
      } catch (error) {
        console.error("Error fetching rice details:", error);
      }
    };

    fetchRiceDetails();
  }, [varietyName]);

  const parsePestReaction = (reactionString) => {
    const reactions = {};
    const pests = reactionString.split(", ");
    pests.forEach((pest) => {
      const [pestName, pestReaction] = pest.split(": ");
      reactions[pestName.trim()] = pestReaction.trim();
    });
    return reactions;
  };

  const pestReactions = riceDetails
    ? parsePestReaction(riceDetails.reaction_to_pests_and_diseases)
    : {};

  return (
    <div className="min-h-screen py-8 px-4"style={{background:`url('https://static.vecteezy.com/system/resources/previews/037/349/469/non_2x/ai-generated-a-handful-of-long-grain-white-rice-spills-out-on-the-wooden-table-food-light-natural-colors-high-quality-ai-generative-photo.jpg')`,backgroundSize: "cover",backgroundRepeat: 'no-repeat'}}>
      <div className=" p-8 rounded-lg shadow-2xl max-w-6xl mx-auto bg-gray-200/80" >
        {riceDetails ? (
          <>
            {/* Rice Variety Header */}
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
              Rice Variety: {riceDetails.variety_name}
            </h2>

            {/* Rice Image */}
            <div className="flex justify-center mb-8">
              <img
                src={`/${varietyName}.JPG`}
                alt={riceDetails.variety_name}
                className="w-full h-auto rounded-lg shadow-xl max-w-lg"
              />
            </div>

            {/* Rice Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-20">
              <div className="space-y-6 ms-40 ">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Varietal Description</h2>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Year of Release:</strong> {riceDetails.year_of_release}
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Parentage:</strong> {riceDetails.parentage}
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Average Yield:</strong> {riceDetails.average_yield} kg/ha
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Maturity:</strong> {riceDetails.maturity} days
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Age Group:</strong> {riceDetails.age_group}
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Basal Leaf Sheath Colour:</strong> {riceDetails.basal_leaf_sheath_colour}
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Recommendation:</strong> {riceDetails.recommendation}
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Grain Quality Characteristics</h2>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Brown Rice Recovery:</strong> {riceDetails.brown_rice_recovery}%
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Milling Recovery:</strong> {riceDetails.milling_recovery}%
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Head Rice Recovery:</strong> {riceDetails.head_rice_recovery}%
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Gelatinization Temperature:</strong> {riceDetails.gelatinization_temperature}
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Thousand Grain Weight:</strong> {riceDetails.thousand_grain_weight} g
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Grain Shape:</strong> {riceDetails.grain_shape}
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Pericarp Colour:</strong> {riceDetails.pericarp_colour}
                </p>
                <p className="text-lg text-black">
                  <strong className="font-semibold">Bushel Weight:</strong> {riceDetails.bushel_weight} kg
                </p>
              </div>
            </div>

            {/* Pest Resistance Table */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Pest and Disease Resistance
              </h3>
              <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg darkgreen">
                <thead className="bg-darkgreen text-white">
                  <tr>
                    <th className="px-6 py-3 text-left border border-gray-300">Brown Planthopper</th>
                    <th className="px-6 py-3 text-left border border-gray-300">Blast</th>
                    <th className="px-6 py-3 text-left border border-gray-300">Bacterial Leaf Blight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border border-gray-300">{pestReactions["Brown Planthopper"]}</td>
                    <td className="px-6 py-3 border border-gray-300">{pestReactions["Blast"]}</td>
                    <td className="px-6 py-3 border border-gray-300">{pestReactions["Bacterial Leaf Blight"]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-700 text-lg">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default VarietyDetails;
