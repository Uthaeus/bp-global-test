import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { OrdersContext } from "../../store/orders-context";
import { UserContext } from "../../store/user-context";

function AccountOrders() {
    const { currentUser: user } = useContext(UserContext);
    const { orders } = useContext(OrdersContext);
    const [loading, setLoading] = useState(true);
    const [currentOrders, setCurrentOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);


    useEffect(() => {
        setCurrentOrders(orders.filter(order => order.status !== 'delivered'));
        setDeliveredOrders(orders.filter(order => order.status === 'delivered'));
        setLoading(false);
    }, [orders]);

    return (
        <div className="account-orders">
            <h1>Account: {user.email}</h1>
            <h2>Current Orders</h2>
            {loading && <p>Loading...</p>}
            {!loading && <ul>
                {currentOrders.map((order) => (
                    <li key={order.id}>
                        <Link to={`/account/orders/${order.id}`}>{order.id}</Link>
                    </li>
                ))}
            </ul>}
            <h2>Delivered Orders</h2>
            {loading && <p>Loading...</p>}
            {!loading && <ul>
                {deliveredOrders.map((order) => (
                    <li key={order.id}>
                        <Link to={`/account/orders/${order.id}`}>{order.id}</Link>
                    </li>
                ))}
            </ul>}
        </div>
    );
}

export default AccountOrders