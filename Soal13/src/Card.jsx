import React from 'react'

const Card = ({ name, age, gender, profession, photo }) => {
    return (
        <div className="card">
            <img src={photo} alt="" />
            <h3> {gender == 'Male' ? 'Mr' : 'Mrs'} {name}</h3>
            <p>{profession}</p>
            <p>{age} years old</p>
        </div>
    )
}

export default Card
