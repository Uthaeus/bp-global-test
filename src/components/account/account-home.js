import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../store/user-context";
import { OrdersContext } from "../../store/orders-context";

function AccountHome() {
    const { currentUser: user } = useContext(UserContext);
    const { orders } = useContext(OrdersContext);
    const [loading, setLoading] = useState(true);
    const [currentOrders, setCurrentOrders] = useState([]);

    useEffect(() => {
        setCurrentOrders(orders.filter(order => order.status !== 'delivered'));
        setLoading(false);
    }, [orders]);


    return (
        <div>
            <h1>Account: {user.email}</h1>

            {loading && <p>Loading...</p>}

            {!loading && (
                <div>
                    <h2>Current Orders</h2>
                    <ul>
                        {currentOrders.map((order) => (
                            <li key={order.id}>
                                <Link to={`/account/orders/${order.id}`}>{order.id}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AccountHome