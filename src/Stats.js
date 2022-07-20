import React from 'react';
import StatsCard from './StatsCard';
import Heart from "./fontawesome-free-6.1.1-web/svgs/solid/heart.svg"
import Fist from "./fontawesome-free-6.1.1-web/svgs/solid/hand-fist.svg"
import Shield from "./fontawesome-free-6.1.1-web/svgs/solid/shield-halved.svg"
import Hope from "./fontawesome-free-6.1.1-web/svgs/regular/face-smile.svg"

const Stats = (props) => {
  return (
      <div className="column is-12" style={{ marginTop: 20}}>
        <div className="columns is-multiline" style={{ textAlign: "center"}}>
          <StatsCard
            statsCardColor="health-card-nest"
            icon={Heart}
            name="Health"
            current="20"
            max="20" />

          <StatsCard
            statsCardColor="attack-card-nest"
            icon={Fist}
            name="Attack"
            current="6"
            max="6" />

          <StatsCard
            statsCardColor="defense-card-nest"
            icon={Shield}
            name="Defense"
            current="2"
            max="2" />

          <StatsCard
            statsCardColor="hope-card-nest"
            icon={Hope}
            name="Hope"
            current="9"
            max="10" />
        </div>
      </div>
  )
}

export default Stats