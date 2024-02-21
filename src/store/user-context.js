import { createContext, useState } from "react";

import { Users } from "./DUMMY_DATA";

export const UserContext = createContext({
    user: null,
    setCurrentUser: () => {},
    logout: () => {},
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

    const logout = () => {
        setUser(null);
    };

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const removeUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const value = { users, addUser, removeUser, user, setCurrentUser, logout };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;