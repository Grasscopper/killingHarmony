import React from 'react';
import Makoto from "./DanganronpaAvatars/Makoto.jpeg";
import Time from "./fontawesome-free-6.1.1-web/svgs/solid/clock.svg";
import Heart from "./fontawesome-free-6.1.1-web/svgs/solid/heart.svg";

const Profile = (props) => {
  let times = Array(props.time).fill(0)
  let timeTiles = times.map((time, index) => {
    return (
      <span className="image is-96x96" style={{ marginTop: 40, marginLeft: 5, marginRight: 5 }} key={index}>
      <img src={Time}></img>
      </span>
    )
  })

  if (props.time === 0) {
    timeTiles =
    <p className="title is-1 has-text-white">End the day?</p>
  }

  const endDay = (event) => {
    if (props.time === 0) {
      props.nextDay()
    }
  }

  return (
    <div className="column is-12">
    <p className="title is-4" style={{ fontWeight: 700, color: "hsl(228, 12%, 44%)", marginBottom: 10}}>
    Character
    </p>
        <div className="columns is-multiline">

          <div className="column is-3">
              <div className="profile-card-nest" style={{ padding: 20, cursor: "pointer", textAlign: "center" }}>
                  <p className="title has-text-white" style={{ marginBottom: 12 }}>{props.playerName}</p>
                  <figure className="image is-128x128">
                    <img src={Makoto} alt="Makoto" style={{ border: "solid" }}/>
                  </figure>

                  <span className="icon-text" style={{ padding: 20 }}>
                    <span className="icon" style={{ marginLeft: 10, marginRight: 10 }}>
                    <img src={Heart}></img>
                    </span>

                    <span className="icon" style={{ marginLeft: 10, marginRight: 10 }}>
                    <img src={Heart}></img>
                    </span>

                    <span className="icon" style={{ marginLeft: 10, marginRight: 10 }}>
                    <img src={Heart}></img>
                    </span>
                  </span>

              </div>
          </div>

          <div className="column is-9">
              <div className="time-card-nest" style={{ padding: 20, cursor: "pointer", textAlign: "center" }} onClick={endDay}>
                  <p className="title has-text-white" style={{ marginBottom: 12 }}>Day {props.currentDay}</p>
                  <span className="icon-text" style={{ padding: 20 }}>
                  {timeTiles}
                  </span>
              </div>
          </div>

        </div>
    </div>
  )
}

export default Profile