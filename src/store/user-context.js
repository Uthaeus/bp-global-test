import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const UserContext = createContext({
    currentUser: null,
    users: [],
    orders: [],
    userLoggedIn: false,
    loading: true
});

export const useUserContext = () => {
    return useContext(UserContext);
}

const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            let userRef = doc(db, 'users', user.uid);

            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                if (userData.role === 'admin') {
                    const ordersRef = collection(db, 'orders');
                    const querySnapshot = await getDocs(ordersRef);
                    const orders = querySnapshot.docs.map(doc => doc.data());
                    setOrders(orders);

                    const usersRef = collection(db, 'users');
                    const querySnapshot2 = await getDocs(usersRef);
                    const users = querySnapshot2.docs.map(doc => doc.data());
                    setUsers(users);
                }
                setCurrentUser({ ...user, ...userData });
            }
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }

        setLoading(false);
    }

    const value = { 
        currentUser,
        users,
        orders,
        userLoggedIn,
        loading
     };

    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;