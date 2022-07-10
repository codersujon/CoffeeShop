import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import FacilityItem from './FacilityItem';
import FacltyIcon1 from '../../images/icon-1.png'
import FacilityInfo from '../../Data/facilityInfo';

const Facility = () => {
    return (
        <section className="facility">
            <SectionTitle title="our facility" />

            <div className="facility__container">
                {/* FACILITY ITEM LOOPING */}
                {FacilityInfo.map(facility =>
                    <FacilityItem 
                        key={facility.key} 
                        image={facility.image} 
                        title={facility.title}
                        text={facility.text}
                    /> 
                )}

            </div>
        </section>
    )
}

export default Facility;