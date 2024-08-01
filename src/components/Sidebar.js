function Sidebar({
  theme,
  savedLocations,
  changeLocation,
  handleDeleteSavedLocation,
}) {
  return (
    <div className={`Sidebar ${theme}`}>
      <h3>Weather App</h3>
      <div className="dashboard-saved">
        <div className="dashboard">Dashboard</div>
        <div className="saved">
          <div className="saved-btn">
            <span>+</span>Saved Locations
          </div>
          <div className="sub-menu">
            <ul>
              {savedLocations.map((location, i) => (
                <li key={i} onClick={() => changeLocation(location)}>
                  {location}
                  <span
                    className="location-delete"
                    onClick={() => handleDeleteSavedLocation(location)}
                  >
                    x
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
