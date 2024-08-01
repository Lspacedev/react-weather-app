function DailyHighlightCards({ day, symbol }) {
  return (
    <div className="Daily-cards">
      <div>
        <h5>avg temp</h5>
        <p>{symbol === "Cel" ? day.avgtemp_c + "C" : day.avgtemp_f + "F"}</p>
      </div>
      <div>
        <h5>avg humidity</h5>
        <p>{day.avghumidity}</p>
      </div>
      <div>
        <h5>avg visibility</h5>
        <p>{day.avgvis_km}</p>
      </div>
    </div>
  );
}

export default DailyHighlightCards;
