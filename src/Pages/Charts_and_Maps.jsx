import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { MapContainer, TileLayer } from "react-leaflet";
import WorldMap from "../Components/WorldMap";
import "leaflet/dist/leaflet.css";

// Register the necessary plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        setCountriesData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchChartData() {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const data = response.data;
        const newChartData = {
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Total Cases",
              data: Object.values(data.cases),
              fill: false,
              borderColor: "white", // Set line color to white for dark theme
              tension: 0.2,
            },
          ],
        };
        setChartData(newChartData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    }

    fetchChartData();
  }, []);

  return (
    <div className="bg-black text-white p-8 pt-16">
      <h1 className="text-4xl font-extrabold mb-4">
        Global COVID-19 Statistics
      </h1>
      <p className="text-lg mb-8">
        Explore global COVID-19 statistics with charts and maps.
      </p>
      <div className="border-2 border-white p-4">
        {chartData ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-white mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4">COVID-19 World Map</h2>
      <p className="text-lg mb-8">
        Visualize the spread of COVID-19 cases on the world map.
      </p>
      <div className="border-2 border-white p-4">
        <MapContainer
          className="w-full h-72 md:h-96"
          bounds={[[-60, -180], [85, 180]]}
          zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <WorldMap countriesData={countriesData} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
