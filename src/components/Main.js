import SearchLocation from "./SearchLocation";
import SavedLocationCard from "./SavedLocationCard";
import Highlights from "./Highlights";
import { IoNotificationsOutline } from "react-icons/io5";

function Main({
  alerts,
  locationObj,
  changeLocation,
  changeTheme,
  changeSymbol,
  theme,
  symbol,
  handleSaveLocation,
}) {
  function open() {
    document.querySelector(".alerts-menu").classList.add("enter");
  }
  function close() {
    document.querySelector(".alerts-menu").classList.remove("enter");
  }
  return (
    <div className={`Main ${theme}`}>
      <div className="main-header">
        <SearchLocation changeLocation={changeLocation} />
        <div className="theme-symbol-save-alert">
          <button className="theme-btn" onClick={changeTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <button className="symbol-btn" onClick={changeSymbol}>
            {symbol === "Cel" ? " °F" : " °C"}
          </button>

          <button className="save-btn" onClick={handleSaveLocation}>
            Save Location
          </button>
          <div className="alert-btn" onClick={open}>
            <IoNotificationsOutline id="alert-icon" />
            {alerts.length}
          </div>
        </div>
      </div>
      <div className="weather-information">
        <Highlights theme={theme} locationObj={locationObj} symbol={symbol} />
        <SavedLocationCard
          theme={theme}
          locationObj={locationObj}
          symbol={symbol}
        />
        <div className="alerts-menu">
          <div className="alerts-menu-close" onClick={close}>
            x
          </div>
          {alerts.length > 0 ? (
            <div className="alerts"></div>
          ) : (
            <div>No severe weather alerts to show.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
