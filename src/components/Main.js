import SearchLocation from "./SearchLocation";
import SavedLocationCard from "./SavedLocationCard";
import Highlights from "./Highlights";
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
    <div className="Main">
      <div className="main-header">
        <SearchLocation changeLocation={changeLocation} />
        <div className="test">
          <button onClick={changeTheme}>
            {theme === "light" ? "dark" : "light"}
          </button>
          <button onClick={changeSymbol}>
            {symbol === "Cel" ? "Far" : "Cel"}
          </button>

          <button onClick={handleSaveLocation}>Save Location</button>
          <button onClick={open}>Alerts{alerts.length}</button>
        </div>
      </div>
      <div className="weather-information">
        <Highlights locationObj={locationObj} symbol={symbol} />
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
