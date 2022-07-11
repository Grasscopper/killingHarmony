import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Activities from './Activities';

const DashboardContainer = (props) => {
  return (
    <div style={{ backgroundColor: "hsl(0, 0%, 100%)" }}>
        <div className="columns is-multiline" style={{ padding: 0 }}>
            <div className="column is-full" style={{ padding: 0 }}>
                <div className="top-background-color"><Dashboard /></div>
            </div>
            <Activities />
        </div>
    </div>
  )
}

export default DashboardContainer