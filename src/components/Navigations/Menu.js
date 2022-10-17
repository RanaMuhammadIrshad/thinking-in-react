import React, {useState} from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'
import NavBar from '../NavBar'

const Menu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <div>
<SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu}>
    <h4>
      Next Courses
      <button
        className="btn-link"
        onClick={() => toggleMenu()}
        style={{ cursor: 'pointer' }}
      >
        <i className="fa fa-close pull-right" />
      </button>
    </h4>
    <SideMenuItem link="#">
      Bootcamp
    </SideMenuItem>
    <SideMenuItem link="#">
      Part-time
    </SideMenuItem>
    <SideMenuItem link="#">
      Advanced React
    </SideMenuItem>
    <SideMenuItem link="#">
      React Native
    </SideMenuItem>
  </SideMenu>
  <NavBar toggleMenu={toggleMenu}/>
  </div>
  )
  
  }

export default Menu
