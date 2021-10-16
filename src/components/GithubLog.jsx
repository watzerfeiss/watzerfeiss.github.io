import React from "react";

import GithubLogEvent from "./GithubLogEvent";

export default function GithubLog({ events }) {
  return (
    <div className="gh-events">
      <h3 className="gh-events__heading">Github activity</h3>
      <ul className="gh-events__list">
        {events.map((event) => (
          <li className="gh-events__item">
            <GithubLogEvent event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}