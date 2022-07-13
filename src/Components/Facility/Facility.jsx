import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import FacilityItem from './FacilityItem';
//JSON DATA
import FacilityInfo from '../../Data/facilityInfo.json';

const Facility = () => {
    return (
        <section className="facility">
            <SectionTitle title="our facility" />

            <div className="facility__container">
                {/* FACILITY ITEM LOOPING */}
                {FacilityInfo.map(faci =>
                    <FacilityItem 
                        key={faci.key} 
                        image={faci.image} 
                        title={faci.title}
                        text={faci.text}
                    /> 
                )}

            </div>
        </section>
    )
}

export default Facility;