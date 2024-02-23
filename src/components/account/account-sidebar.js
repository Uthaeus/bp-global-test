import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase";
import { UserContext } from "../../store/user-context";

function AccountSidebar() {
    const { currentUser: user } = useContext(UserContext);

    return (
        <div className="account-sidebar">
            <h2>Hello {user.email}</h2>
            <NavLink to='/account' className={({ isActive }) => isActive ? 'account-sidebar-link sidebar-link-active' : 'account-sidebar-link'}>Account Home</NavLink>
            <NavLink to='/account/orders' className={({ isActive }) => isActive ? 'account-sidebar-link account-sidebar-link-active' : 'account-sidebar-link'}>Orders</NavLink>
            <NavLink to='/account/profile' className={({ isActive }) => isActive ? 'account-sidebar-link account-sidebar-link-active' : 'account-sidebar-link'}>Profile</NavLink>
            <Link to='/' className="account-sidebar-link" onClick={() => signOut(auth)}>Logout</Link>
        </div>
    );
}

export default AccountSidebar;