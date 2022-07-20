import React from 'react';
import StatsCard from './StatsCard';
import Heart from "./fontawesome-free-6.1.1-web/svgs/solid/heart.svg"
import Fist from "./fontawesome-free-6.1.1-web/svgs/solid/hand-fist.svg"
import Shield from "./fontawesome-free-6.1.1-web/svgs/solid/shield-halved.svg"
import Hope from "./fontawesome-free-6.1.1-web/svgs/regular/face-smile.svg"

const Stats = (props) => {
  return (
      <div className="column is-12" style={{ marginTop: 20}}>
      <p className="title is-4" style={{ fontWeight: 700, color: "hsl(228, 12%, 44%)", marginBottom: 10 }}>
      Stats
      </p>
        <div className="columns is-multiline" style={{ textAlign: "center"}}>
          <StatsCard
            statsCardColor="health-card-nest"
            icon={Heart}
            name="Health"
            current={props.player.health}
            max={props.player.health} />

          <StatsCard
            statsCardColor="attack-card-nest"
            icon={Fist}
            name="Attack"
            current={props.player.attack}
            max={props.player.attack} />

          <StatsCard
            statsCardColor="defense-card-nest"
            icon={Shield}
            name="Defense"
            current={props.player.defense}
            max={props.player.defense} />

          <StatsCard
            statsCardColor="hope-card-nest"
            icon={Hope}
            name="Hope"
            current={props.player.hope}
            max={props.player.hope} />
        </div>
      </div>
  )
}

export default Stats