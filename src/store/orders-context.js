import { useState, useEffect, useContext, createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { UserContext } from "./user-context";


export const OrdersContext = createContext({
    orders: [],
    loading: true
});


export const useOrdersContext = () => {
    return useContext(OrdersContext);
}


const OrdersContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        if (currentUser.role !== 'admin') {
            setLoading(false);
            return;
        }
        const ordersRef = collection(db, 'orders');
        const ordersSnap = getDocs(ordersRef);
        ordersSnap.then((querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                orders.push(doc.data());
            });
            setOrders(orders);
            setLoading(false);
        });
    }, []);

    const value = {
        orders,
        loading
    };

    return (
        <OrdersContext.Provider value={value}>
            {!loading && children}
        </OrdersContext.Provider>
    );
}


export default OrdersContextProvider;