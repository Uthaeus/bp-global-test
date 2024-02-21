import { NavLink, Link } from "react-router-dom";

function AccountSidebar({ user }) {
    return (
        <div className="account-sidebar">
            <h2>Hello {user.name}</h2>
            <NavLink to='/account' className={({ isActive }) => isActive ? 'account-sidebar-link active' : 'account-sidebar-link'}>Account Home</NavLink>
            <NavLink to='/account/orders' className={({ isActive }) => isActive ? 'account-sidebar-link active' : 'account-sidebar-link'}>Orders</NavLink>
            <NavLink to='/account/profile' className={({ isActive }) => isActive ? 'account-sidebar-link active' : 'account-sidebar-link'}>Profile</NavLink>
            <Link to='/' className="account-sidebar-link">Logout</Link>
        </div>
    );
}

export default AccountSidebar;