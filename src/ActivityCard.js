import React from 'react';
import Minus from "./fontawesome-free-6.1.1-web/svgs/solid/minus.svg"

const ActivityCard = (props) => {
  return (
    <div className="column is-3" style={{  marginBottom: 20 }}>
      <div className="overview-card-background" style={{ cursor: "pointer" }}>
        <div className="columns is-mobile is-multiline" style={{ padding: 10, paddingTop: 5, paddingBottom: 5, minHeight: 139 }} onClick={props.action}>

          <div className="column is-7-mobile is-7" style={{ paddingTop: 15, addingBottom: 0 }}>
            <p style={{ paddingLeft: 10, fontSize: 14, fontWeight: 700, color: "hsl(228, 12%, 44%)" }}>
            {props.activity}
            </p>
          </div>

          <div className="column is-5-mobile is-5" style={{ textAlign: "right", paddingTop: 13, paddingRight: 35 }}>
            <span className="icon-text">
              <span>
              <img src={Minus} style={{ height: 20, width: 15 }}/>
              </span>

              <span>
              <img src={props.costIcon} style={{ height: 20, width: 20 }}/>
              </span>
            </span>
          </div>

          <div className="column is-half-mobile is-6" style={{ paddingTop: 0 }}>
            <p style={{ paddingLeft: 10, fontSize: 32, fontWeight: 700, color: "#363636" }}>
            {props.benefit}
            </p>
          </div>

          <div className="column is-half-mobile is-6" style={{ textAlign: "right", paddingTop: 13, paddingRight: 35 }}>
          <img src={props.benefitIcon} style={{ height: 20, width: 20 }}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ActivityCard