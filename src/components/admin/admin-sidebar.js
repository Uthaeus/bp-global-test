import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase";

function AdminSidebar() {

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
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'admin-sidebar-link admin-sidebar-link-active' : 'admin-sidebar-link'}>Home</NavLink>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'admin-sidebar-link admin-sidebar-link-active' : 'admin-sidebar-link'}>Users</NavLink>
            <NavLink to="/admin/orders" className={({ isActive }) => isActive ? 'admin-sidebar-link admin-sidebar-link-active' : 'admin-sidebar-link'}>Orders</NavLink>

            <button className="admin-sidebar-logout-btn" onClick={logout}>Logout</button>
        </div>
    );
}

export default AdminSidebar;