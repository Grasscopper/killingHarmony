import React from 'react';
import ActivityCard from './ActivityCard';
import Time from "./fontawesome-free-6.1.1-web/svgs/solid/hourglass.svg"
import Heart from "./fontawesome-free-6.1.1-web/svgs/solid/heart.svg"
import Fist from "./fontawesome-free-6.1.1-web/svgs/solid/hand-fist.svg"
import Shield from "./fontawesome-free-6.1.1-web/svgs/solid/shield-halved.svg"
import Hope from "./fontawesome-free-6.1.1-web/svgs/regular/face-smile.svg"
import Key from "./fontawesome-free-6.1.1-web/svgs/solid/key.svg"
import Item from "./fontawesome-free-6.1.1-web/svgs/solid/suitcase.svg"

const Activities = (props) => {
  return (
      <div className="column is-12">
        <p className="title is-4" style={{ fontWeight: 700, color: "hsl(228, 12%, 44%)", marginBottom: 40 }}>
        Activities
        </p>

        <div className="columns is-multiline">
          <ActivityCard
            activity="Train at the gym"
            costIcon={Time}
            benefit="+1"
            benefitIcon={Fist} />

          <ActivityCard
            activity="Go swimming"
            costIcon={Time}
            benefit="+1"
            benefitIcon={Shield} />

          <ActivityCard
            activity="Spend time with a friend"
            costIcon={Time}
            benefit="+2"
            benefitIcon={Hope} />

          <ActivityCard
            activity="Spend time with a stranger"
            costIcon={Time}
            benefit="+1"
            benefitIcon={Hope} />

          <ActivityCard
            activity="Enter a dungeon"
            costIcon={Time}
            benefit="+1"
            benefitIcon={Key} />

          <ActivityCard
            activity="Go to the school store"
            costIcon={Time}
            benefit="+1"
            benefitIcon={Item} />

          <ActivityCard
            activity="Eat"
            costIcon={Time}
            benefit="+1"
            benefitIcon={Heart} />

          <ActivityCard
            activity="Rest"
            costIcon={Time}
            benefit="+2"
            benefitIcon={Heart} />
        </div>
      </div>
  )
}

export default Activities