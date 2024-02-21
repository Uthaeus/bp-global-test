import { createContext, useState } from "react";

import { Users } from "./DUMMY_DATA";

export const UserContext = createContext({
    user: null,
    setCurrentUser: () => {},
    users: Users,
    addUser: () => {},
    removeUser: () => {},
});

const UserContextProvider = ({ children }) => {

    const [users, setUsers] = useState(Users);
    const [user, setUser] = useState(null);

    const setCurrentUser = (user) => {
        setUser(user);
    };

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const removeUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const value = { users, addUser, removeUser, user, setCurrentUser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;