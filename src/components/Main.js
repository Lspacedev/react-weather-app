import SearchLocation from "./SearchLocation";
import SavedLocationCard from "./SavedLocationCard";
import Highlights from "./Highlights";
function Main({ locationObj, changeLocation, changeTheme, theme }) {
  return (
    <div className="Main">
      <div className="main-header">
        <SearchLocation changeLocation={changeLocation} />
        <div className="test">
          <button onClick={changeTheme}>{theme}</button>
          {/*locationName*/}
          {JSON.stringify(locationObj)}
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
