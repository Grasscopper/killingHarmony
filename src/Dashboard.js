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
      <div className="columns is-multiline" style={{ paddingLeft: 130, paddingRight: 130, margin: 0 }}>
          <Profile />
          <Stats />
          <Activities />
      </div>
    </>
  )
}

export default Dashboard