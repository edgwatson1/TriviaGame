import React, { useState } from "react"
import firebase from '../firebase'

const AddLeader = ({ overallTime }) => {
    const [name, setName] = useState("")
    const [time, setTime] = useState("")

    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('leaders')
            .add({
                name,
                time_seconds: Number(time)
            })
            .then(() => {
                setName("")
                setTime("")
            })
            .then(() => window.location.href = '/Leaderboard')
    }

    return (

        <form onSubmit={onSubmit} >
            <div>
                <label>INITIALS</label>
                <input type="text" maxLength="3" value={name} onChange={e => setName(e.currentTarget.value)} />
            </div>
            <div>
                <label>TIME</label>
                <input type="number" value={overallTime} readonly onChange={e => setTime(e.currentTarget.value)} />
            </div>
            <button className="btn"><a>Submit</a></button>
        </form >
    )
}

export default AddLeader


