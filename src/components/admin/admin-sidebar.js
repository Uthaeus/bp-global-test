import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase";

import { UserContext } from "../../store/user-context";

function AdminSidebar() {
    const { currentUser: user } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="admin-sidebar">
            <div className="admin-sidebar-avatar-wrapper">
                <img src="https://via.placeholder.com/150" alt="avatar" className="admin-sidebar-avatar" />
                <p className="admin-sidebar-username">{user.username}</p>
                <p className="admin-sidebar-email">{user.email}</p>
                <Link to="/admin/account/edit" className="admin-sidebar-edit-btn">Edit Profile</Link>
            </div>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'admin-sidebar-link admin-sidebar-link-active' : 'admin-sidebar-link'}>Home</NavLink>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'admin-sidebar-link admin-sidebar-link-active' : 'admin-sidebar-link'}>Users</NavLink>
            <NavLink to="/admin/orders" className={({ isActive }) => isActive ? 'admin-sidebar-link admin-sidebar-link-active' : 'admin-sidebar-link'}>Orders</NavLink>
            <NavLink to="/admin/new-order" className={({ isActive }) => isActive ? 'admin-sidebar-link admin-sidebar-link-active' : 'admin-sidebar-link'}>New Order</NavLink>

            <button className="admin-sidebar-logout-btn" onClick={logout}>Logout</button>
        </div>
    );
}

export default AdminSidebar;