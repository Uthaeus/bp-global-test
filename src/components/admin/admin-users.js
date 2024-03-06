import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UsersContext } from "../../store/users-context";


function AdminUsers() {
    const { users } = useContext(UsersContext);
    const [adminUsers, setAdminUsers] = useState([]);
    const [commonUsers, setCommonUsers] = useState([]);

    useEffect(() => {
        setAdminUsers(users.filter(user => user.role === 'admin'));
        setCommonUsers(users.filter(user => user.role !== 'admin'));
    }, [users]);

    return (
        <div className="admin-users-container">
            <h1>Admin</h1>
            <ul>
                {adminUsers.map((user) => (
                    <li key={user.id}>
                        <Link to={`/admin/users/${user.id}`}>{user.email}</Link>
                    </li>
                ))}
            </ul>

            <h1>Users</h1>
            <ul>
                {commonUsers.map((user) => (
                    <li key={user.id}>
                        <Link to={`/admin/users/${user.id}`}>{user.email}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminUsers;