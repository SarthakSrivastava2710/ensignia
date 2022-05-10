import React, { useState } from "react";
import "./Challenge.css";
import ChallengePopup from "./ChallengePopup";

function Challenge({ challenge }) {
  const [popupDisplay, setPopupDisplay] = useState(false);

  const popupDisplayHandler = () => {
    setPopupDisplay(true);
  };

  const hidePopupDisplayHandler = (value) => {
    if (value) setPopupDisplay(false);
  };
  return (
    <>
      {popupDisplay && (
        <ChallengePopup
          challenge={challenge}
          onHidePopupDisplay={hidePopupDisplayHandler}
        />
      )}
      <div className="challenge-container" onClick={popupDisplayHandler}>
        <div className="challenge-content">
          <h1 className="challenge-name">{challenge.challengeName}</h1>
          <h3 className="challenge-score">{challenge.challengeScore}</h3>
        </div>
      </div>
    </>
  );
}

export default Challenge;
