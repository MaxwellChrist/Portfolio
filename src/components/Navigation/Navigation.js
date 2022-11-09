import { Link, Outlet } from 'react-router-dom'
// import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../../assets/images/Logo3.png'
import './Navigation.css'

const Navigation = () => {

    return (
        <div className="app">
            <header>
                <nav>
                    <div className='navbar-sections'>
                        <Link id="home" to="/">Home</Link>
                        <Link id="about" to="/about">About</Link>
                        <Link id="projects" to="/projects">Projects</Link>
                        <Link id="contact" to="/contact">Contact</Link>
                    </div>
                    <div className='logo navbar-sections'>
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}



export default Navigation