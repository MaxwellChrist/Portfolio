import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
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
                <div className='navbar-container'>
                    <nav>
                        <div className='navbar-sections'>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className='navbar-sections'>
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            )}
        </div>
    )
}



export default Navigation