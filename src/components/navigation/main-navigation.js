import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <NavLink to='/' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Home</NavLink>
                <NavLink to='/events' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Events</NavLink>
                <NavLink to='/newsletter' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Newsletter</NavLink>
            </div>
            <div className="main-navigation-right">
                <NavLink to='/login' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Login</NavLink>
                <NavLink to='/register' className={({ isActive }) => isActive ? 'main-nav-link active' : 'main-nav-link'}>Register</NavLink>
            </div>
        </div>
    )
}

export default MainNavigation;