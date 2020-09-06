// This component is a parent for each individual tweet component.
// It holds logic for each tweet.

import React from "react";
import Tweet from "./Tweet";
import stephyAvatar from "../../stephy-avatar.jpg";
import chrisAvatar from "../../chris-avatar.jpg";
import nateAvatar from "../../nate-avatar.jpg";
import daymanAvatar from "../../dayman-avatar.jpg";

export default function Tweets() {
    const tweets = [
      {
        id: "0",
        name: "Stephy Garcia",
        userName: "StephyG",
        avatar: stephyAvatar,
        timeSincePost: "16h",
      },
      {
        id: "1",
        name: "Chris Beardsley",
        userName: "ChrisBFriedChicken",
        avatar: chrisAvatar,
        timeSincePost: "8h",
      },
      {
        id: "2",
        name: "Nathan McMasters",
        userName: "NateMcMasters",
        avatar: nateAvatar,
        timeSincePost: "2h",
      },
      {
        id: "3",
        name: "Dayman McMasters",
        userName: "DaymanKnight",
        avatar: daymanAvatar,
        timeSincePost: "7h",
      },
    ];

    // Places each tweet over one another.
    return (
      <React.Fragment>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            name={tweet.name}
            userName={tweet.userName}
            avatar={tweet.avatar}
            timeSincePost={tweet.timeSincePost}
          ></Tweet>
        ))}
      </React.Fragment>
    );
}
