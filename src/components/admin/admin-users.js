import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { collection, query, onSnapshot } from "firebase/firestore";

import { db } from "../../firebase";

function AdminUsers() {

    const [users, setUsers] = useState([]);
    const [adminUsers, setAdminUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const usersRef = collection(db, 'users');
        const q = query(usersRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const u = [];
            const a = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().role === 'user') {
                    u.push({ ...doc.data(), id: doc.id });
                } else if (doc.data().role === 'admin') {
                    a.push({ ...doc.data(), id: doc.id });
                }
            });
            setUsers(u);
            setAdminUsers(a);
        });

        setLoading(false);
        return () => {
            unsubscribe();
        }
    }, []);

    

    if (loading) {
        return <div>Loading...</div>;
    }

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
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/admin/users/${user.id}`}>{user.email}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminUsers;