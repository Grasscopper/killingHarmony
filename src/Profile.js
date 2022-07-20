import React from 'react';
import Makoto from "./DanganronpaAvatars/Makoto.jpeg";
import Time from "./fontawesome-free-6.1.1-web/svgs/solid/hourglass.svg";

const Profile = (props) => {
  return (
    <div className="column is-12">
        <div className="columns is-multiline">

          <div className="column is-3">
              <div className="profile-card-nest" style={{ padding: 20, cursor: "pointer", textAlign: "center" }}>
                  <p className="title has-text-white" style={{ marginBottom: 12 }}>Makoto</p>
                  <figure className="image is-128x128">
                    <img src={Makoto} alt="Makoto" style={{ border: "solid" }}/>
                  </figure>
              </div>
          </div>

          <div className="column is-9">
              <div className="time-card-nest" style={{ padding: 20, cursor: "pointer", textAlign: "center" }}>
                  <p className="title has-text-white" style={{ marginBottom: 12 }}>What should go here?!</p>
                  <figure className="image is-64x64">
                    <img src={Time} alt="Makoto" />
                  </figure>
              </div>
          </div>

        </div>
    </div>
  )
}

export default Profile