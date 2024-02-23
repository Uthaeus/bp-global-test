import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function AccountHome() {
    const { currentUser: user } = useContext(UserContext);

    return (
        <div>
            <h1>Account: {user.email}</h1>
        </div>
    );
}

export default AccountHome