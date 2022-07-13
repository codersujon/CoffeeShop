import React from 'react';
import SectionTitle from './../SectionTitle/SectionTitle';
import TeamMember from './TeamMember';
import TeamInfo from './../../Data/teamInfo.json';

const Team = () => {
  return (
    <section className="team">

        <SectionTitle title="our team"/>
        <div className="team__container">
            {TeamInfo.map(member =>{
                return(
                    <TeamMember 
                        key={member.key} 
                        image={member.image} 
                        title={member.title} 
                    />
                )
            } )}
        </div>

    </section>
  )
}

export default Team