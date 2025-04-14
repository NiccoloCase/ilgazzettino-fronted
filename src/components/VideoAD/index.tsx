import React, { useEffect, useState } from "react";
import "./VideoAD.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const TOTAL_DURATION = 15;
const START_IN = 3;

export const VideoAD: React.FC = () => {
  const [countdown, setCountdown] = useState(TOTAL_DURATION);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, START_IN * 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const progressPercentage =
    ((TOTAL_DURATION - countdown) / TOTAL_DURATION) * 100;

  if (!isVisible) return null;

  return (
    <div className="fake-video-ad" role="region" aria-label="Advertisement">
      <figure className="video-ad-figure">
        <img
          src="https://placehold.co/1100x600"
          alt="Advertisement content"
          className="video-frame w-100"
          width="1100"
          height="600"
        />
        <figcaption className="overlay-text position-absolute bottom-0 start-0 w-100 py-2 text-white">
          <div className="d-flex align-items-center justify-content-start gap-2 mb-3">
            <button
              className="mute-icon"
              onClick={() => setIsMuted((s) => !s)}
              aria-label={
                isMuted ? "Unmute advertisement" : "Mute advertisement"
              }
            >
              <FontAwesomeIcon
                icon={!isMuted ? faVolumeHigh : faVolumeMute}
                aria-hidden="true"
              />
            </button>
            <span className="countdown">
              <small>This video will resume in {countdown} seconds</small>
            </span>
          </div>
          <div
            className="progress-bar-container mt-1"
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
