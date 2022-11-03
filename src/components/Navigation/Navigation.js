import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    width: 100%;
    height: 50px;
    background: papayawhip;

    div {
        display: flex;
        padding: 0 10px;
        justify-content: center;
        gap: 10px;

        a {
            text-decoration: none;
            color: green;
        }   

        h1 {
            color: blue;
        }
    }

`;

const Navigation = () => {
    return (
        <div className='navbar-container' style={{paddingTop: "50px"}}>
            <Navbar>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    <h1>Logo and social media links for later</h1>
                </div>
            </Navbar>
            <Outlet />
        </div>
    )
}



export default Navigation