import React from 'react';
import SriLankaSVG from '../assets/sri-lanka.svg';

const RiceVarietyMap = () => {
  return (
    <div className="map-container">
      <h1>Rice Variety Map</h1>
      <img src={SriLankaSVG} className="map" alt="Sri Lanka Map" />
    </div>
  );
};

export default RiceVarietyMap;
