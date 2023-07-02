import React, { useState, useRef, useEffect } from 'react'
import Styled from "./Navbarthree.module.css"


const NavBarThree = () => {
    const [isopenSearch, setOpenSearch] = useState(true)
    const inputSearchRef = useRef(null);

    // useEffect(() => {
    //     inputSearchRef.current.focus();
    //   }, [isopenSearch]);

    const SearchHandler = () => {
        console.log("click")
        setOpenSearch(pre => !pre)
    }

    return (
        <div className={Styled.Navbarthree_container}>
            {isopenSearch ?
                <div className={Styled.innnerNavbar_three}>
                    <ul>
                        <li>HOME</li>
                        <li>FEATURE</li>
                        <li> MEGA MENU </li>
                        <li>DOCUMENTATION</li>
                        
                    </ul>
                </div> :
                <input type="text" ref={inputSearchRef} className={Styled.searchInput} placeholder='Search...' />
            }
            {isopenSearch ?
                <span className={Styled.search} onClick={SearchHandler}><i class="fa-solid fa-magnifying-glass"></i></span>
                :
                <span className={Styled.search} onClick={SearchHandler}><i class="fa-solid fa-xmark"></i></span>
            }
        </div>
    )
}

export default NavBarThree