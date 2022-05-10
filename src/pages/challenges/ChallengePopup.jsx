import React from "react";
import styles from "./ChallengePopup.module.css";
import { MdCancel } from "react-icons/md";

const ChallengePopup = ({ challenge, onHidePopupDisplay }) => {
  return (
    <section className={styles["ChallengePopup-outerContainer"]}>
      <div className={styles["ChallengePopup-innerContainer"]}>
        <div className={styles["ChallengePopup-cancelContainer"]}>
          <MdCancel
            className={styles["ChallengePopup-cancelIcon"]}
            onClick={() => onHidePopupDisplay(true)}
          />
        </div>
        <div className={styles["ChallengePopup-challengeDetails"]}>
          <h1>{challenge.challengeName}</h1>
          <h2>{challenge.challengeScore}</h2>
        </div>
        <div className={styles["ChallengePopup-challengeIO"]}>
          <p>Can you get the flag?</p>
          <span className={styles["ChallengePopuup-file"]}>
            {challenge.PopupData.File}
          </span>
          <form className={styles["ChallengePopuup-form"]} action="">
            <input
              className={styles["ChallengePopuup-textInput"]}
              type="text"
              placeholder="Flag: IN{}"
            />
            <button className={styles["ChallengePopuup-submitButton"]}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChallengePopup;
