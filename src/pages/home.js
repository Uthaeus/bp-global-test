
import { useContext } from "react";

import { UserContext } from "../store/user-context";

export default function Home() {
    const { users, user } = useContext(UserContext);

    return (
        <div className="home">
            <h1>Home</h1>

            <p>Current user: {user?.name}</p>
            <p>User role: {user?.role}</p>

            {user?.role === 'admin' && (
                <div>
                    <h2>Admin Panel</h2>
                    <p>Users:</p>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}