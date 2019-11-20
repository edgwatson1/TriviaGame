import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LeaderboardOrig = (props) => {
    return (
        <>
            <h1>placefiller</h1>
            <button
                className="btn btnplayagain"
                value="Refresh Page"
                onClick={window.location.reload}
            >
                <a href="/">Play Again</a>
            </button>
        </>
    )
}

export default LeaderboardOrig