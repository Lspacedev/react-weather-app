import SearchLocation from "./SearchLocation";
import SavedLocationCard from "./SavedLocationCard";
import Highlights from "./Highlights";
function Main({
  locationObj,
  changeLocation,
  changeTheme,
  theme,
  handleSaveLocation,
}) {
  return (
    <div className="Main">
      <div className="main-header">
        <SearchLocation changeLocation={changeLocation} />
        <div className="test">
          <button onClick={changeTheme}>{theme}</button>

          <button onClick={handleSaveLocation}>Save Location</button>
        </div>
      </div>
      <div className="weather-information">
        <Highlights locationObj={locationObj} />
        <SavedLocationCard />
      </div>
    </div>
  );
}

export default Main;
