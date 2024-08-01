import { useState } from "react";
import DailyHighlightCards from "./DailyHighlightCards";
import HourlyHighlightCard from "./HourlyHighlightCard";

function Highlights({ locationObj }) {
  const [content, setContent] = useState("daily");
  function handleContentChange(name) {
    setContent(name);
  }
  const day = locationObj.day;
  const hour = locationObj.hour;
  return (
    <div className="Highlights">
      <h1>Highlights</h1>
      <div className="daily-hourly">
        <div
          onClick={() => {
            handleContentChange("daily");
          }}
        >
          daily
        </div>
        <div
          onClick={() => {
            handleContentChange("hourly");
          }}
        >
          Hourly
        </div>
      </div>
      <div className="highlights-content">
        {content === "daily" ? (
          day ? (
            <DailyHighlightCards day={day} />
          ) : (
            "No daily data to show."
          )
        ) : day ? (
          <div>
            <HourlyHighlightCard hour={hour.twelve_am} time={"12:00 am"} />
            <HourlyHighlightCard hour={hour.six_am} time={"6:00 am"} />
            <HourlyHighlightCard hour={hour.twelve_pm} time={"12:00 pm"} />
            <HourlyHighlightCard hour={hour.six_pm} time={"6:00 pm"} />
          </div>
        ) : (
          "No hourly data to show."
        )}
      </div>
    </div>
  );
}
export default Highlights;
