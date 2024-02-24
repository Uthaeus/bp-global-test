import { Outlet } from "react-router";

import MainNavigation from "./navigation/main-navigation";
import AdminSidebar from "./admin/admin-sidebar";

function AdminLayout() {
    return (
        <div className="admin-layout">
            <MainNavigation />

            <div className="admin-layout-main">
                <AdminSidebar />
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout