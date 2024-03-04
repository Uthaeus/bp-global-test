import { useState, useEffect, useContext } from "react";
import { collection, getDocs, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { UserContext } from "../../store/user-context";

function AdminHome() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getOrders() {
            const ordersRef = collection(db, 'orders');
            const querySnapshot = await getDocs(ordersRef);
            const orders = querySnapshot.docs.map(doc => doc.data());
            setOrders(orders);
        }
        getOrders();
    }, []);

    return (
        <div className="admin-home">
            <div className="admin-home-header">
                <h1>Admin Home</h1>
            </div>

            {/* chart of current orders */}
        </div>
    );
}

export default AdminHome