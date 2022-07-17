import React from 'react';
import SectionTitle from './../SectionTitle/SectionTitle';
import TeamMember from './TeamMember';
import TeamInfo from './../../Data/teamInfo.json';

const Team = () => {
  return (
    <section className="team">
        <SectionTitle title="our team"/>

        <div className="team__container">
            {
                TeamInfo.map(item=>{
                    return(
                       <TeamMember 
                            key={item.id}
                            image="https://picsum.photos/300/200"
                            title={item.title}
                       /> 
                    )
                })
            }
        </div>

    </section>
  )
}

export default Team