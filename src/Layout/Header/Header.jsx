import React from 'react'
import Logo from './logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <section className="flex">
        <Logo />
        <Navbar />
      </section>
    </header>
  )
}

export default Header;