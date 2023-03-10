import "./App.css";
import SideBar from "./components/sidebar/sideBar";
import MainSection from "./components/mainSection/mainSection";
import { TEMP_UNIT } from "./constant";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("London");
  const [tempUnit, setTempUnit] = useState(TEMP_UNIT.C);

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=3e6d2cbe5fa64c18b21173827232701&q=${location}&days=6&aqi=no&alerts=no`
      );
      setWeatherData(response.data);
    }
    getWeather();
  }, [location]);
  return (
    <div className="App">
      {weatherData && <SideBar weatherData={weatherData} setLocation={setLocation} tempUnit = {tempUnit}/>}
      {weatherData && <MainSection weatherData={weatherData} tempUnit = {tempUnit} setTempUnit={setTempUnit}/>}
    </div>
  );
}

export default App;
