import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../utils/marker_icon.png";

const WorldMap = ({ countriesData }) => {
  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">COVID-19 Map</h2>
      <p className="text-gray-600 mb-4">
        Explore the distribution of COVID-19 cases worldwide. Click on markers
        for details.
      </p>
      <div className="h-96">
        {countriesData?.map(({ country, active, recovered, deaths, countryInfo }) => (
          <Marker
            icon={customMarker}
            key={countryInfo._id}
            position={[countryInfo.lat, countryInfo.long]}
          >
            <Popup>
              <div>
                <h2 className="text-lg font-semibold mb-2">{country}</h2>
                <p className="text-gray-700">
                  Active Cases: {active} <br />
                  Recovered Cases: {recovered} <br />
                  Deaths: {deaths}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
