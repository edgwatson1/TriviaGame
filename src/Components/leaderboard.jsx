import React, { useState, useEffect } from 'react'
import firebase from '../firebase'


function useLeaders() {
    const [leaders, setLeaders] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('leaders')
            .onSnapshot((snapshot) => {
                const newLeaders = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()

                }))
                setLeaders(newLeaders)
            })
        return () => unsubscribe()
    }, [])

    return leaders
}


const Leaderboard = () => {
    const leaders = useLeaders()

    return (
        <div className="container">
            
            

            <h1 className="spinner-message">
                LeaderBoard
                </h1>
            <br />
            <div>
                <label>Sort By:</label>{' '}
                <select>
                    <option>Leader (highest first)</option>
                    <option>Leader (lowest first)</option>
                    <option disabled>---</option>
                    <option>Name (a-z)</option>
                    <option>Name (z-a)</option>
                </select>
            </div>
            <br />
            <ol>
                {leaders.map((leader) =>
                    <li key={leader.id}>
                        <div className="leader-entry">
                            {leader.name}
                            <code className="time"> --> {leader.time_seconds} seconds</code>
                        </div>
                    </li>
                )}
            </ol>
            <div className="footer">
            <audio src='/score.mp3' autoPlay loop />
            <button
                className="btn btnplayagain"
                value="Refresh Page"
                onClick={window.location.reload}
            >
                <a href="/">Play Again</a>
            </button>
            </div>
        </div>
    )
}

export default Leaderboard
