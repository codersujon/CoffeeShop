import React from 'react'

const TeamMember = ({title, image}) => {
    return (
        <div className="team__member">
            <img src={image} alt="" />
            <h3>{title}</h3>
        </div>
    )
}

export default TeamMember