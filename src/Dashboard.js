import React from 'react';
import Header from "./Header";
import Stats from "./Stats"

const Dashboard = (props) => {
  return (
    <div className="columns is-multiline" style={{ padding: 20 }}>
      <Header />
      <Stats />
    </div>
  )
}

export default Dashboard