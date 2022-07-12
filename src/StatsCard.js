import React from 'react';

const StatsCard = (props) => {
  let engagementIcon = <svg transform="translate(-4,-4)" xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/></svg>
  let engagementColor = "hsl(163, 72%, 41%)"
  let engagementPercentage = props.progressToday

  if (props.progressToday < 0) {
    engagementIcon = <svg transform="translate(-4,-3)" xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z"/></svg>
    engagementColor = "hsl(356, 69%, 56%)"
    engagementPercentage = engagementPercentage.slice(1)
  }

  return (
    <div className="column is-3">
      <div className={props.statsCardColor} style={{ paddingTop: 20, cursor: "pointer" }}>
        <img src={props.icon} style={{ height: 20, width: 20 }}/>
        <p className="icon-text" style={{
          paddingLeft: 8,
          fontSize: 14,
          fontWeight: 700,
          color: "hsl(228, 12%, 44%)"}}>
        {props.name}</p>

        <p className="title" style={{
          paddingTop: 15,
          fontSize: 64,
          fontWeight: 700,
          color: "#363636"
        }}>{props.current}</p>

        <p className="subtitle is-6" style={{
          paddingTop: 0,
          letterSpacing: ".3rem",
          fontWeight: 500,
          color: "hsl(228, 0%, 44%)",
          marginBottom: 12
        }}>/{props.max}</p>

        <div style={{ padding: 10 }}>
        <progress className="progress is-success" value={props.current} max={props.max} />
        </div>
      </div>
    </div>
  )
}

export default StatsCard