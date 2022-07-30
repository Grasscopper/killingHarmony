import React from 'react';
import Header from "./Header";
import Profile from './Profile';
import Stats from "./Stats";
import Activities from "./Activities";
import Makoto from './DanganronpaAvatars/Makoto.jpeg';

const Dashboard = (props) => {
  return (
    <>
      <section className="hero is-success">
          <div className="hero-body">
            <p className="title">Killing Harmony</p>
          </div>
      </section>
      <div className="columns is-multiline" style={{ paddingLeft: 13, paddingRight: 13, margin: 0 }}>
          <Profile
            playerName={props.G.player.name}
            passwords={props.G.player.passwords}
            items={props.G.player.items}
            time={props.G.time}
            currentDay={props.G.day}
            nextDay={props.moves.nextDay} />
          <Stats player={props.G.player} />
          <Activities moves={props.moves} />
      </div>
    </>
  )
}

export default Dashboard