import React from 'react'

const Header = (props) => {
  return (
    <>
      <div className="column is-1" />

      <div className="column is-5" style={{ marginTop: 20, paddingLeft: 30, paddingRight: 30 }}>
        <p className="title is-4" style={{ fontWeight: 700 }}>
        Killing Harmony
        </p>
        <p className="subtitle is-6" style={{ fontWeight: 700, color: "hsl(228, 12%, 44%)" }}>
        Acquire the Passwords to Escape
        </p>
      </div>

      <div className="column is-6" />
    </>
  )
}

export default Header