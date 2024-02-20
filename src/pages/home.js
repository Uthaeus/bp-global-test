
import { useContext } from "react";

import { UserContext } from "../store/user-context";

export default function Home() {
    const { users } = useContext(UserContext);

    return (
        <div className="home">
            <h1>Home</h1>
        </div>
    );
}