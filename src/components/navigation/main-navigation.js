import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

function MainNavigation() {

    const { user, logout } = useContext(UserContext);

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <NavLink to='/' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>About</NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Contact</NavLink>
            </div>
            <div className="main-navigation-right">
                {user ? <>
                        <NavLink to='/account' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>My Account</NavLink>
                        <Link to='/' className="main-nav-link" onClick={logout}>Logout</Link>
                    </> : <>
                        <NavLink to='/auth/login' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Login</NavLink>
                        <NavLink to='/auth/register' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Register</NavLink>
                    </> 
                }
            </div>
        </div>
    )
}

export default MainNavigation;