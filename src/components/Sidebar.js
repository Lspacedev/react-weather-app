function Sidebar() {
  return (
    <div className="Sidebar">
      <h1>Weather App</h1>
      <div className="dashboard-saved">
        <div className="dashboard">Dashboard</div>
        <div className="saved">
          <div className="saved-btn">
            <span>+</span>Saved Locations
          </div>
          <div className="sub-menu">
            <h4>Pretoria</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
