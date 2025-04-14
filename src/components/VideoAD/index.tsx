import React, { useEffect, useState } from "react";
import "./VideoAD.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const TOTAL_DURATION = 15;
const START_IN = 5;

export const VideoAD: React.FC = () => {
  const [countdown, setCountdown] = useState(TOTAL_DURATION);
  const [isVisible, setIsVisible] = useState(false);
  const [isMute, setIsMute] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, START_IN * 1000);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [countdown, isVisible]);

  const progressPercentage =
    ((TOTAL_DURATION - countdown) / TOTAL_DURATION) * 100;

  if (!isVisible) return null;

  return (
    <div className="fake-video-ad ">
      <img
        src="https://placehold.co/1100x600"
        alt="Fake video"
        className="video-frame w-100"
      />
      <div className="overlay-text position-absolute bottom-0 start-0 w-100  py-2 text-white">
        <div className="d-flex align-items-center justify-content-start gap-2 mb-3">
          <button className="mute-icon" onClick={() => setIsMute((s) => !s)}>
            <FontAwesomeIcon icon={!isMute ? faVolumeHigh : faVolumeMute} />
          </button>
          <span className="countdown">
            <small>This video will resume in {countdown} seconds</small>
          </span>
        </div>
        <div className="progress-bar-container mt-1">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
