function HourlyHighlightCard({ symbol, hour, time }) {
  const conditionText = hour.condition.text;
  const conditionIcon = hour.condition.icon;
  const temp_c = hour.temp_c;
  const temp_f = hour.temp_f;
  return (
    <div className="HourlyHighlightCard">
      <h4>{time}</h4>
      <div>
        <img src={`${conditionIcon}`} />
      </div>
      <div className="hourly-temp">
        {symbol === "Cel" ? temp_c + " °C" : temp_f + " °F"}
      </div>
    </div>
  );
}
export default HourlyHighlightCard;
