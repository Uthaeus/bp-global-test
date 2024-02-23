
import { useContext, useEffect } from "react";

import { UserContext } from "../store/user-context";

export default function Home() {
    const { currentUser: user, userLoggedIn, loading  } = useContext(UserContext);

    return (
        <div className="home">
            <h1>Home</h1>

            <p>Current user: {loading ? 'Loading...' : user ? user.email : 'Not logged in'}</p>
            <p>User role: {loading ? 'Loading...' : user ? user.role : 'Not logged in'}</p>
        </div>
    );
}