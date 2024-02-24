import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function AccountHome() {
    const { currentUser: user } = useContext(UserContext);

    return (
        <div>
            <h1>Account: {user.email}</h1>

            {user.displayName && <p>Display Name: {user.displayName}</p>}

            <p>Role: {user.role}</p>
        </div>
    );
}

export default AccountHome