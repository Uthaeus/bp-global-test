import { Outlet } from "react-router";

import MainNavigation from "./navigation/main-navigation";

function AuthLayout() {
    return (
        <div className="auth-layout">
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default AuthLayout