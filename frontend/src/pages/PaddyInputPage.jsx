import { useState } from "react";
import axios from "axios";
import { FaSeedling } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RiceVarietyForm = () => {
  const navigate = useNavigate();

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [districts, setDistricts] = useState([]);
  const [riceVarieties, setRiceVarieties] = useState([]);
  const [loading, setLoading] = useState(false);

  const provinces = [
    "Western Province",
    "Eastern Province",
    "Southern Province",
    "Northern Province",
    "Central Province",
    "Uva Province",
    "Sabaragamuwa Province",
    "North Central Province",
    "North Western Province",
  ];

  const districtData = {
    "Western Province": ["Colombo", "Gampaha", "Kalutara"],
    "Eastern Province": ["Ampara", "Batticaloa", "Trincomalee"],
    "Southern Province": ["Galle", "Matara", "Hambantota"],
    "Northern Province": ["Jaffna", "Kilinochchi", "Mannar"],
    "Central Province": ["Kandy", "Nuwara Eliya", "Matale"],
    "Uva Province": ["Badulla", "Monaragala"],
    "Sabaragamuwa Province": ["Ratnapura", "Kegalle"],
    "North Central Province": ["Anuradhapura", "Polonnaruwa"],
    "North Western Province": ["Kurunegala", "Puttalam"],
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setDistricts(districtData[selectedProvince] || []);
    setDistrict("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!province || !district || !ageGroup) {
      alert("Please select all fields");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/rice_varieties", // Make sure the API endpoint is correct
        {
          province_name: province,  // Corrected field name
          district_name: district,  // Corrected field name
          age_group: ageGroup,
        }
      );
      console.log("API Response:", response.data); // Log the response to check what is returned
      setRiceVarieties(response.data.map((variety) => variety.variety_name));
      navigate('/result', {
        state: { province, district, ageGroup, riceVarieties: response.data.map((variety) => variety.variety_name) },
      });
    } catch (error) {
      console.error("Error fetching rice varieties:", error);
      alert("Error fetching rice varieties");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mx-auto flex flex-col">
      <h2 className="text-4xl text-center mt-10 font-bold text-white mx-auto">Predict the Best Suited Varieties</h2>
      <form onSubmit={handleSubmit} className="bg-black/70 border-2 border-black/40 w-2/5 p-8 mx-auto rounded-3xl mt-10">
        <div className="mb-6">
          <label htmlFor="province" className="block text-lg font-semibold text-gray-200">Province</label>
          <select
            id="province"
            value={province}
            onChange={handleProvinceChange}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select Province</option>
            {provinces.map((provinceOption) => (
              <option key={provinceOption} value={provinceOption}>
                {provinceOption}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="district" className="block text-lg font-semibold text-gray-200">District</label>
          <select
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg"
            disabled={!province}
          >
            <option value="">Select District</option>
            {districts.map((districtOption) => (
              <option key={districtOption} value={districtOption}>
                {districtOption}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="ageGroup" className="block text-lg font-semibold text-gray-200">Age Group</label>
          <select
            id="ageGroup"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg"
            disabled={!province}
          >
            <option value="">Select Age Group</option>
            <option value="2.5">2.5</option>
            <option value="3.0">3.0</option>
            <option value="3.5">3.5</option>
            <option value="4.0">4.0</option>
            <option value="5.0">5.0</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center gap-2 py-3 px-12 my-6 bg-green-600 text-white font-bold text-xl rounded-lg"
          >
            {loading ? "Loading..." : <><FaSeedling /> PREDICT</>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RiceVarietyForm;
