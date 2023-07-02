import React from 'react'
import Styed from "./Navbar_two.module.css"
import DarkMode from '../DarkMode/DarkMode'
const NavBarTwo = () => {
  return (
    <div className={Styed.navbartwo_container}>
      <div className={Styed.logo}><span>My Blogs</span></div>
        <div className={Styed.navbar_two_section}>
            <ul>
                <li className={Styed.listSection}><span className={Styed.listSectionLogo}> <i class="fa fa-bullhorn" aria-hidden="true"></i></span>LETEST</li>
                <li className={Styed.listSection}><span className={Styed.listSectionLogo}><i class="fa fa-heart-o" aria-hidden="true"></i></span>POPULAR</li>
                <li className={Styed.listSection}><span className={Styed.listSectionLogo}><i class="fa fa-fire" aria-hidden="true"></i></span>HOT</li>
                <li className={Styed.listSection}><span className={Styed.listSectionLogo}><i class="fa fa-line-chart" aria-hidden="true"></i></span>TRENDING</li>
                <li className={Styed.listSection}><DarkMode/></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBarTwo