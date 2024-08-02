import { useState } from "react";
import DailyHighlightCards from "./DailyHighlightCards";
import HourlyHighlightCard from "./HourlyHighlightCard";
import TodayHighlightCard from "./TodayHighlightCard";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { RiSunFoggyFill } from "react-icons/ri";
import { TbEyeCog } from "react-icons/tb";

function Highlights({ locationObj, symbol }) {
  const [content, setContent] = useState("daily");
  function handleContentChange(name) {
    //change the current class from daily to hourly and vice versa
    if (name === "daily") {
      document.querySelector(".hourly").classList.remove("current");
      document.querySelector(".daily").classList.add("current");
    } else if (name === "hourly") {
      document.querySelector(".daily").classList.remove("current");
      document.querySelector(".hourly").classList.add("current");
    }
    setContent(name);
  }
  const day = locationObj.day;
  const hour = locationObj.hour;
  console.log(locationObj);
  return (
    <div className="Highlights">
      <div className="daily-hourly">
        <div
          className="daily"
          onClick={() => {
            handleContentChange("daily");
          }}
        >
          Daily
        </div>
        <div
          className="hourly"
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
            <HourlyHighlightCard
              symbol={symbol}
              hour={hour.twelve_am}
              time={"12:00 am"}
            />
            <HourlyHighlightCard hour={hour.six_am} time={"6:00 am"} />
            <HourlyHighlightCard hour={hour.twelve_pm} time={"12:00 pm"} />
            <HourlyHighlightCard hour={hour.six_pm} time={"6:00 pm"} />
          </div>
        ) : (
          "No hourly data to show."
        )}
      </div>
      <div className="today-div">
        <h3>Today's Highlights</h3>

        <div></div>
        {JSON.stringify(locationObj) !== "{}" ? (
          <div className="todays-highlights">
            <TodayHighlightCard
              name={"Wind Speed"}
              value={locationObj.wind_speed}
              symbol={"km/h"}
            >
              <FaWind />
            </TodayHighlightCard>
            <TodayHighlightCard
              name={"Visibility"}
              value={locationObj.visibility}
              symbol={"km"}
            >
              <TbEyeCog />
            </TodayHighlightCard>
            <TodayHighlightCard
              name={"UV Index"}
              value={locationObj.uv}
              symbol={""}
            >
              <RiSunFoggyFill />
            </TodayHighlightCard>
            <TodayHighlightCard
              name={"Humidity"}
              value={locationObj.humidity}
              symbol={"%"}
            >
              <WiHumidity />
            </TodayHighlightCard>
          </div>
        ) : (
          <div>No highlights to show.</div>
        )}
      </div>
    </div>
  );
}
export default Highlights;
