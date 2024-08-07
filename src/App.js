import "./App.css";
import { useState, useEffect } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  const [locationName, setLocationName] = useLocalStorage("locName", "");
  const [locationObj, setLocationObj] = useLocalStorage("locObject", {});
  const [savedLocations, setSavedLocations] = useLocalStorage("savedLoc", []);
  const [symbol, setSymbol] = useLocalStorage("symbol", "Cel");
  const [alerts, setAlerts] = useState([]);
  const [err, setErr] = useState("");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    function success(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let name = lat.toString() + "," + long.toString();

      setLocationName(name);
    }
    function error(error) {
      console.log(error);
    }
    if (locationName === "") {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  useEffect(() => {
    const storedCity = locationObj.city;
    if (locationName !== "" && locationName !== storedCity) {
      fetch(
        `${apiUrl}/v1/forecast.json?key=${apiKey}&q=${locationName}&alerts=yes`,
        { mode: "cors" }
      )
        .then((res) => res.json())
        .then((res) => {
          let location = res.location;
          let current = res.current;
          let forecast = res.forecast.forecastday[0];
          let alertsArr = res.alerts.alert;

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
            wind_speed: current.wind_kph,
            chance_of_rain: forecast.day.daily_chance_of_rain,
            sunrise: forecast.astro.sunrise,
            sunset: forecast.astro.sunset,
            uv: forecast.day.uv,
            day: {
              avghumidity: forecast.day.avghumidity,
              avgtemp_c: forecast.day.avgtemp_c,
              avgtemp_f: forecast.day.avgtemp_f,
              avgvis_km: forecast.day.avgvis_km,
              avgvis_miles: forecast.day.avgvis_miles,
            },
            hour: {
              twelve_am: forecast.hour[0],
              six_am: forecast.hour[0],
              six_pm: forecast.hour[0],
              twelve_pm: forecast.hour[0],
            },
          };

          setLocationObj(obj);
          setAlerts(alertsArr);
        })
        .catch((err) => {
          console.log(err);
          setErr(err);
        });
    }
  }, [locationName]);
  function changeLocation(name) {
    setLocationName(name);
  }
  function changeTheme() {
    let toggle = theme === "light" ? "dark" : "light";
    setTheme(toggle);
  }
  function changeSymbol() {
    let toggle = symbol === "Cel" ? "Far" : "Cel";
    setSymbol(toggle);
  }
  function handleSaveLocation() {
    const findLocation = savedLocations.filter(
      (location) => location === locationName
    );
    if (locationName === "") {
      return;
    }
    if (findLocation.length === 0) {
      let arr = [...savedLocations];
      arr.push(locationName);
      alert("Location has been saved!");

      setSavedLocations(arr);
    }
  }
  function handleDeleteSavedLocation(name) {
    const filteredSavedLocation = savedLocations.filter(
      (location) => location !== name
    );
    //alert("Location has been deleted!");

    setSavedLocations(filteredSavedLocation);
    setLocationObj({});
  }

  return (
    <div className={`App ${theme}`}>
      <Sidebar
        theme={theme}
        savedLocations={savedLocations}
        changeLocation={changeLocation}
        handleDeleteSavedLocation={handleDeleteSavedLocation}
      />

      <Main
        alerts={alerts}
        locationObj={locationObj || {}}
        changeLocation={changeLocation}
        changeTheme={changeTheme}
        changeSymbol={changeSymbol}
        theme={theme}
        symbol={symbol}
        handleSaveLocation={handleSaveLocation}
      />
    </div>
  );
}

export default App;
