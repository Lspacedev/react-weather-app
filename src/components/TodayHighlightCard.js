function TodayHighlightCard({ name, value, symbol, children }) {
  return (
    <div className="TodayHighlightCard">
      <div className="today-card-icon">{children}</div>
      <div className="today-card-info">
        <h5>{name}</h5>
        <p>
          {value}
          {symbol}
        </p>
      </div>
    </div>
  );
}
export default TodayHighlightCard;
