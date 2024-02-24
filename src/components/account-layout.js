import { Outlet } from "react-router";

import MainNavigation from "./navigation/main-navigation";
import AccountSidebar from "./account/account-sidebar";

function AccountLayout() {

    return (
        <div className="account-layout">
            <MainNavigation />

            <div className="account-layout-main">
                <AccountSidebar />
                <Outlet />
            </div>
        </div>
    );
}

export default AccountLayout;