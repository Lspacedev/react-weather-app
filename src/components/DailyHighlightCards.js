import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";

function DailyHighlightCards({ day, symbol }) {
  return (
    <div className="Daily-cards">
      <div className="card">
        <h5>Average temp</h5>
        <p>
          {symbol === "Cel" ? day.avgtemp_c + " °C" : day.avgtemp_f + " °F"}
        </p>
        <div>
          <FaTemperatureHigh className="daily-card-icon" />
        </div>
      </div>
      <div className="card">
        <h5>Average humidity</h5>
        <p>{day.avghumidity}%</p>
        <div>
          <WiHumidity className="daily-card-icon" />
        </div>
      </div>
      <div className="card">
        <h5>Average visibility</h5>
        <p>{day.avgvis_km}km</p>
        <div>
          <MdVisibility className="daily-card-icon" />
        </div>
      </div>
    </div>
  );
}

export default DailyHighlightCards;
