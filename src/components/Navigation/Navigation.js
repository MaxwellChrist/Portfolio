import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import Logo from '../../assets/images/Logo3.png'
import './Navigation.css'

const Navigation = () => {
    const [active, setActive] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWidth(window.innerWidth);
      }
    useEffect(() => {
        window.addEventListener('resize', handleResize, false);
        console.log(width)
    }, [width])

    return (
        <div className="app">
            <header>
                <nav className={active ? "slider active" : "slider"}>
                    <div className="menu-icon" >
                        <GiHamburgerMenu className='menu' display={!active && width <= 650 ? 'block' : 'none'} onClick={() => setActive(!active)}/>
                        <GrClose className="close" display={active && width <= 650 ? 'block' : 'none'} onClick={() => setActive(!active)}/>
                    </div>
                    <ul>
                        <div className="main-nav">
                            <li><Link id="home" to="/">Home</Link></li>
                            <li><Link id="about" to="/about">About</Link></li>
                            <li><Link id="projects" to="/projects">Projects</Link></li>
                            <li><Link id="contact" to="/contact">Contact</Link></li>
                        </div>
                        <div className="logo-container">
                            <li><Link to="/"><img id="logo" src={Logo} alt="logo" /></Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}



export default Navigation