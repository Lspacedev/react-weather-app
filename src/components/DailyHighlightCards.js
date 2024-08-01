function DailyHighlightCards({ day }) {
  return (
    <div className="Daily-cards">
      <div>
        <h5>avg temp</h5>
        <p>{day.avgtemp_c}</p>
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
