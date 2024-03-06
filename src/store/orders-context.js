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
        const fetchOrders = async () => {
          if (currentUser) {
            const ordersRef = collection(db, 'orders');
            try {
              const ordersSnap = await getDocs(ordersRef);
              const orders = ordersSnap.docs.map((doc) => doc.data());
              
              if (currentUser.role === 'admin') {
                setOrders(orders);
              } else {
                const userOrders = orders.filter((order) => order.customer_id === currentUser.uid);
                setOrders(userOrders);
              }
            } catch (error) {
              console.error('Error fetching orders:', error);
            } 
          }

          setLoading(false);
        };
      
        fetchOrders();
      }, [currentUser]);

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