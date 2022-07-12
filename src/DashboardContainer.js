import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Activities from './Activities';

const DashboardContainer = (props) => {
  return (
    <div style={{ backgroundColor: "hsl(0, 0%, 100%)" }}>
      <Dashboard />
    </div>
  )
}

export default DashboardContainer