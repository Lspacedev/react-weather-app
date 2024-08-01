function HourlyHighlightCard({ hour, time }) {
  const conditionText = hour.condition.text;
  const conditionIcon = hour.condition.icon;
  const temp_c = hour.temp_c;
  const temp_f = hour.temp_f;
  return (
    <div>
      <h4>{time}</h4>
      <div>
        <img src={`${conditionIcon}`} />
      </div>
      <div>{temp_c}</div>
    </div>
  );
}
export default HourlyHighlightCard;
