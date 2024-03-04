import { useState, useEffect, useContext } from "react";
import { collection, getDocs, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { UserContext } from "../../store/user-context";

function AdminHome() {
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getOrders() {
            const ordersRef = collection(db, 'orders');
            const querySnapshot = await getDocs(ordersRef);
            const orders = querySnapshot.docs.map(doc => doc.data());
            setOrders(orders);
        }
        getOrders();
    }, []);

    useEffect(() => {
        async function getUsers() {
            const usersRef = collection(db, 'users');
            const querySnapshot = await getDocs(usersRef);
            const users = querySnapshot.docs.map(doc => doc.data());
            setUsers(users);
        }
        getUsers();
    }, []);
    
    return (
        <div>
            <h1>Admin Home</h1>

            {/* chart of current orders */}
        </div>
    );
}

export default AdminHome