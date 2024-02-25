import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { collection } from "firebase/firestore";

import { db } from "../../firebase";

function AdminUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const usersCollection = collection(db, 'users');
    //     usersCollection.get().then((querySnapshot) => {
    //         const usersData = querySnapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }));
    //     });

    //     setUsers(usersData);
    //     setLoading(false);
    // }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="admin-users-container">
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