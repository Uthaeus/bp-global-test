
import { useContext } from "react";

import { UserContext } from "../store/user-context";

export default function Home() {
    const { user } = useContext(UserContext);

    return (
        <div className="home">
            <h1>Home</h1>

            <p>Current user: {user?.name}</p>
            <p>User role: {user?.role}</p>
        </div>
    );
}