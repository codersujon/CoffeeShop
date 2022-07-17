import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItem from './MenuItem';
import MenuInfo from '../../Data/menuInfo.json';

const Menu = () => {
    return (
        <section className="menu">
            <SectionTitle title="popular menu" />
            <div className="menu__container">
                {/* MENU LOOPING */}
                {
                    MenuInfo.map(item=>{
                        return(
                            <MenuItem 
                                key={item.id}
                                image= "https://picsum.photos/300/200"
                                title={item.title}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Menu