import { Outlet } from "react-router";

import UsersContextProvider from "../store/users-context";

import MainNavigation from "./navigation/main-navigation";
import AdminSidebar from "./admin/admin-sidebar";

function AdminLayout() {
    return (
        
        <div className="admin-layout">
            <MainNavigation />

            <UsersContextProvider>
                <div className="admin-layout-main">
                    <AdminSidebar />
                    <Outlet />
                </div>
            </UsersContextProvider>
        </div>
    );
}

export default AdminLayout