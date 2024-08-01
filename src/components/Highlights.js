import { useState } from "react";
import DailyHighlightCards from "./DailyHighlightCards";
import HourlyHighlightCard from "./HourlyHighlightCard";
import TodayHighlightCard from "./TodayHighlightCard";

function Highlights({ locationObj, symbol }) {
  const [content, setContent] = useState("daily");
  function handleContentChange(name) {
    setContent(name);
  }
  const day = locationObj.day;
  const hour = locationObj.hour;
  console.log(locationObj);
  return (
    <div className="Highlights">
      <div className="daily-hourly">
        <div
          onClick={() => {
            handleContentChange("daily");
          }}
        >
          Daily
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
            <DailyHighlightCards day={day} symbol={symbol} />
          ) : (
            "No daily data to show."
          )
        ) : hour ? (
          <div className="Hourly-cards">
            <HourlyHighlightCard hour={hour.twelve_am} time={"12:00 am"} />
            <HourlyHighlightCard hour={hour.six_am} time={"6:00 am"} />
            <HourlyHighlightCard hour={hour.twelve_pm} time={"12:00 pm"} />
            <HourlyHighlightCard hour={hour.six_pm} time={"6:00 pm"} />
          </div>
        ) : (
          "No hourly data to show."
        )}
      </div>
      <div>
        <h3>Today's Highlights</h3>
        {JSON.stringify(locationObj) !== "{}" ? (
          <div className="todays-highlights">
            <TodayHighlightCard
              name={"Wind Speed"}
              value={locationObj.wind_speed}
            />
            <TodayHighlightCard
              name={"Visibility"}
              value={locationObj.visibility}
            />
            <TodayHighlightCard name={"UV"} value={locationObj.uv} />
            <TodayHighlightCard
              name={"Humidity"}
              value={locationObj.humidity}
            />
          </div>
        ) : (
          <div>No highlights to show.</div>
        )}
      </div>
    </div>
  );
}
export default Highlights;
