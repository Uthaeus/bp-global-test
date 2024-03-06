import { useState, useEffect, useContext, createContext } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";
import { UserContext } from "./user-context";


export const UsersContext = createContext({
    users: [],
    loading: true
});


export const useUsersContext = () => {
    return useContext(UsersContext);
}


const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        if (currentUser.role !== 'admin') {
            setLoading(false);
            return;
        }
        const usersRef = collection(db, 'users');
        const usersSnap = getDocs(usersRef);
        usersSnap.then((querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                users.push(doc.data());
            });
            setUsers(users);
            setLoading(false);
        });
    }, []);

    const value = {
        users,
        loading
    };

    return (
        <UsersContext.Provider value={value}>
            {!loading && children}
        </UsersContext.Provider>
    );
}


export default UsersContextProvider;

