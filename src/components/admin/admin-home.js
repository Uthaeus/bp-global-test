import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../store/user-context";

function AdminHome() {
    const { orders } = useContext(UserContext);
    const [currentOrders, setCurrentOrders] = useState([]);

    useEffect(() => {
        setCurrentOrders(orders);
    }, [orders]);

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