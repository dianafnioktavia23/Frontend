// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"
import '../assets/css/navbar.css';

const Navbar =()=>{
    const[menuToggle, setMenuToggle] = useState(false);
    const[socialToggle, setSocialToggle] = useState(false);
    const[headerFixed , setHeaderFixed] = useState(false);

    window.addEventListener("scroll",()=>{
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false)
        }
    })

    return(
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" :""}`}>
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to ="Login">Login</Link>
                    </div>
                </div>
            </div>

            {/* header button */}
            <div className='header-buttom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        {/* logo */}
                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <img src={logo} alt=''/>
                            </div>
                        </div>

                        {/* menu list */}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`} style={{ color: 'white' }}>      
                                    <li><Link to = "/">Home</Link></li>
                                    <li><Link to = "/about">tentang</Link></li>
                                    <li><Link to = "/menu">menu</Link></li>
                                    <li><Link to = "/call">Hubungi Kami</Link></li>
                                </ul>

                                <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/menu">Menu</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default Navbar;
