import SearchLocation from "./SearchLocation";
import SavedLocationCard from "./SavedLocationCard";
import Highlights from "./Highlights";
function Main({
  locationObj,
  changeLocation,
  changeTheme,
  changeSymbol,
  theme,
  symbol,
  handleSaveLocation,
}) {
  return (
    <div className="Main">
      <div className="main-header">
        <SearchLocation changeLocation={changeLocation} />
        <div className="test">
          <button onClick={changeTheme}>{theme}</button>
          <button onClick={changeSymbol}>{symbol}</button>

          <button onClick={handleSaveLocation}>Save Location</button>
        </div>
      </div>
      <div className="weather-information">
        <Highlights locationObj={locationObj} symbol={symbol} />
        <SavedLocationCard
          theme={theme}
          locationObj={locationObj}
          symbol={symbol}
        />
      </div>
    </div>
  );
}

export default Main;
