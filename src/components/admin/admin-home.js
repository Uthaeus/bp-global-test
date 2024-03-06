import { useState, useEffect, useContext } from "react";

import { OrdersContext } from "../../store/orders-context";

function AdminHome() {
    const { orders } = useContext(OrdersContext);
    const [currentOrders, setCurrentOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCurrentOrders(orders.filter(order => order.status !== 'delivered'));
        setLoading(false);
    }, [orders]);

    return (
        <div className="admin-home">
            <div className="admin-home-header">
                <h1>Admin Home</h1>
            </div>

            
            <div className="admin-home-orders">
                <h2>Current Orders</h2>
                <ul>
                    {currentOrders.map((order) => (
                        <li key={order.id}>
                            <Link to={`/admin/orders/${order.id}`}>{order.id}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminHome