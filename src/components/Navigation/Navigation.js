import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../../assets/images/Logo3.png'
import './Navigation.css'

const Navigation = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    return (
        <div className="main-container">
            {loading ? (
                <div className="loader-container">
                    <span className="loader"></span>
                </div>
            ) : (
                <header>
                    <nav>
                        <div className='navbar-sections'>
                            <Link id="home" to="/">Home</Link>
                            <Link id="about" to="/about">About</Link>
                            <Link id="projects" to="/projects">Projects</Link>
                            <Link id="contact" to="/contact">Contact</Link>
                        </div>
                        <div id="logo" className='navbar-sections'>
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                    </nav>
                </header>
            )}
            <Outlet />
        </div>
    )
}



export default Navigation