function SavedLocationCard({ locationObj }) {
  return (
    <div className="saved-location-card">
      <div className="city-time">
        <div className="city">
          <h2>{locationObj.city}</h2>
          <p>
            {locationObj.region},{locationObj.country}
          </p>
        </div>
        <div className="time">{locationObj.time}</div>
      </div>
      <div className="temp-condition-text">
        <img src={`${locationObj.condition.icon}`} />
        <div className="temp-text">
          <div className="temp">{locationObj.temp_c}</div>
          <div className="condition-text">{locationObj.condition.text}</div>
        </div>
      </div>
      <hr />
      <div className="chance-of-rain">
        <h4>Chance of rain</h4>
        <div>{locationObj.chance_of_rain}%</div>
      </div>
      <div className="sunrise-sunset">
        <h4>Sunrise & Sunset</h4>
        <div className="sunrise">
          <h5>Sunrise</h5>
          <div>{locationObj.sunrise}</div>
        </div>
        <div className="sunset">
          <h5>Sunset</h5>
          <div>{locationObj.sunset}</div>
        </div>
      </div>
    </div>
  );
}
export default SavedLocationCard;
