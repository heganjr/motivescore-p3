import React from "react";
import "./landingpage.css";

export default function landingpage() {
  return (
    <div className="landing">
      <h2>
        Increase drive to do group activities with this engaging app designed to
        make workouts fun:
      </h2>
      <ul>
        <li>
          Designed with Fitness Classes in mind - MotivScore - Gives class
          instructors the power to make classes engaging and fun for all
          involved by creating a MotivTeam.
        </li>
        <br />
        <li>
          MotivScore works by allowing class instructors to schedule classes and
          generate unique check in codes.
        </li>
        <li>
          When checking in with the unique class code the class attendees are
          rewarded with MotivPoints.
        </li>
        <br />
        <li>
          These MotivPoints can be used to claim rewards in the MotivStore.
        </li>
        <br />
        <li>
          {" "}
          The contents of the MotivStore are determined by the class instructor.
          <div>
            <br />

            <ul>
              <li>Control the class music?</li>
              <li>Give yourself an extra 1 min break between sets?</li>
              <li>Recieve gym merch or equipment?</li>
              <li>Maybe even claim a free class session?</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
