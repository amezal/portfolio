import React, { useState } from 'react';
import { Spring as Burger } from 'react-burgers';
import MobileMenu from './MobileMenu';
import '../styles/Navbar.scss';


const Navbar = () => {

  const [active, setActive] = useState(false);

  return (
    <>
      <header className='navbar'>
        <div className="logo">
          AM
        </div>
        <Burger
          active={active}
          onClick={() => setActive(!active)}
          color="#FFF"
          borderRadius={5}
          width={35}
          lineHeight={4}
          lineSpacing={6}
          padding="0px"
        />
      </header>
      <MobileMenu active={active} setActive={setActive} />
    </>
  )
}

export default Navbar;