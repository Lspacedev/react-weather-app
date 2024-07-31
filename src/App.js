import "./App.css";
import { useState, useEffect } from "react";
import Main from "./components/Main";

function App() {
  const [locationName, setLocationName] = useState("");
  const [locationObj, setLocationObj] = useState({});
  const [err, setErr] = useState("");

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    /*fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=1d668ceaba92432fb3890228240802&q=${locationName}`,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((res) => {
        let location = res.location;
        let current = res.current;
        let forecast = res.forecast.forecastday[0];
        const obj = {
          country: location.country,
          region: location.region,
          city: location.name,
          time: location.localtime,
          temp_c: current.temp_c,
          temp_f: current.temp_f,
          humidity: current.humidity,
          visibility: current.vis_km,
          condition: {
            text: current.condition.text,
            icon: current.condition.icon,
          },
          chance_of_rain: forecast.day.daily_chance_of_rain,
          sunrise: forecast.astro.sunrise,
          sunset: forecast.astro.sunset,
          uv: forecast.day.uv,
        };
        console.log("object:", obj);
        setLocationObj(obj);
      }).catch(err){
        setErr(err);
      };*/
  }, []);
  function changeLocation(name) {
    setLocationName(name);
  }
  function changeTheme() {
    let toggle = theme === "light" ? "dark" : "light";
    setTheme(toggle);
  }
  return (
    <div className={`App ${theme}`}>
      <button onClick={changeTheme}>{theme}</button>
      {locationName}
      {JSON.stringify(locationObj)}
      <Main changeLocation={changeLocation} />
    </div>
  );
}

export default App;
