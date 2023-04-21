import React from "react";
import './AchievementCard.css'

const AchievementCard = (heading, detail) => {
  return (
    <div className="book">
      <p className="text-green">{detail}</p>
      <div className="cover">
        <p className="text-green">{heading}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
