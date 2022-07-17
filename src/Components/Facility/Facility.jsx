import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import FacilityItem from './FacilityItem';
import FACILITY from '../../Data/facilityInfo';


const Facility = () => {
    return (
        <section className="facility">
            <SectionTitle title="our facility" />

            <div className="facility__container">
            {/* FACILITY ITEM LOOPING */}

            {
                FACILITY.map(item => {
                    return(
                        <FacilityItem 
                            key={item.key}
                            image="https://picsum.photos/300/200"
                            title={item.title}
                            text={item.text}
                        />
                    )
                })
            }

            </div>
        </section>
    )
}

export default Facility;