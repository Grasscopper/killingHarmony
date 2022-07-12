import React from 'react';
import Header from "./Header";
import Stats from "./Stats";
import Activities from "./Activities";
import Makoto from './DanganronpaAvatars/Makoto.jpeg';

const Dashboard = (props) => {
  return (
    <>
      <section className="hero is-success">
          <div className="hero-body">
            <p className="title">Killing Harmony</p>
            <p className="subtitle">Acquire the Passwords to Escape</p>
          </div>
      </section>
      <div className="columns is-multiline" style={{ padding: 0, margin: 0 }}>
          <Stats />
          <Activities />
      </div>
    </>
  )
}

export default Dashboard