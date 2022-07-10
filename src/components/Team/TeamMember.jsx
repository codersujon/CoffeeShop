import React from 'react'

const TeamMember = ({title, image}) => {
    return (
        <div className="team__member">
            <img src={image} alt="Team-Member-Image" />
            <h3>{title}</h3>
        </div>
    )
}

export default TeamMember