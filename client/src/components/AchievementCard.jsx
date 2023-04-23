import React from "react";
import "./AchievementCard.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const AchievementCard = ({ item }) => {
  const { detail, heading, date, icon } = item;
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#50a069", color: "#50a069", width:'fitContent'}}
      contentArrowStyle={{ borderRight: "7px solid  #50a069", width:'100px' }}
      date={date}
      className="vertical-timeline-element--work"
      iconStyle={{ background: "#fff", color: "#60a069" }}
      icon={<div className="flex justify-center items-center pt-3">{icon}</div>}
    >
      <div className="flex justify-center">
        <div className="book ">
          <p className="pl-10 pr-4">{detail}</p>
          <div className="cover px-10">
            <p>{heading}</p>
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default AchievementCard;
