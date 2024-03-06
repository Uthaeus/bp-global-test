import { Outlet } from "react-router";

import UsersContextProvider from "../store/users-context";
import OrdersContextProvider from "../store/orders-context";

import MainNavigation from "./navigation/main-navigation";
import AdminSidebar from "./admin/admin-sidebar";

function AdminLayout() {
    return (
        
        <div className="admin-layout">
            <MainNavigation />

            <UsersContextProvider>
                <OrdersContextProvider>
                    <div className="admin-layout-main">
                        <AdminSidebar />
                        <Outlet />
                    </div>
                </OrdersContextProvider>
            </UsersContextProvider>
        </div>
    );
}

export default AdminLayout