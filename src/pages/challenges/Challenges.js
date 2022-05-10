import React from "react";
import Category from "./Category";
import "./Challenges.css";

const cryptoChallenges = [
  {
    challengeName: "Encrypt14n St4nd4rd",
    challengeScore: 100,
    PopupData: {
      File: "Yaha ya toh file aayegi ya fir ip",
    },
  },
  {
    challengeName: "H1dd3n f1L3$",
    challengeScore: 300,
    PopupData: {
      File: "Yaha ya toh file aayegi ya fir ip",
    },
  },
  {
    challengeName: "M3t4EXPLOIT",
    challengeScore: 250,
    PopupData: {
      File: "Yaha ya toh file aayegi ya fir ip",
    },
  },
];

const steganoChallenges = [
  {
    challengeName: "uyueghdtty35",
    challengeScore: 900,
    PopupData: {
      File: "Yaha ya toh file aayegi ya fir ip",
    },
  },
  {
    challengeName: "3236r@@3jyfku",
    challengeScore: 500,
    PopupData: {
      File: "Yaha ya toh file aayegi ya fir ip",
    },
  },
  {
    challengeName: "fucksarthak",
    challengeScore: 100,
    PopupData: {
      File: "Yaha ya toh file aayegi ya fir ip",
    },
  },
];

function challenges() {
  return (
    <div className="challenge-category">
      <Category category="Cryptography" Challenges={cryptoChallenges} />
      <Category category="Steganography" Challenges={steganoChallenges} />
    </div>
  );
}

export default challenges;
