import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuItem from './MenuItem';
import MenuInfo from '../../Data/menuInfo';

const Menu = () => {
    return (
        <section className="menu">
            <SectionTitle title="popular menu" />
            <div className="menu__container">
                {/* MENU LOOPING */}
                {MenuInfo.map(menu => {
                    return (
                        <MenuItem
                            key={menu.key}
                            image={menu.image}
                            title={menu.title}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Menu