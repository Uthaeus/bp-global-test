import { Outlet } from "react-router";
import { useContext } from "react";

import { UserContext } from "../store/user-context";

import MainNavigation from "./navigation/main-navigation";
import AccountSidebar from "./account/account-sidebar";

function AccountLayout() {

    const { user } = useContext(UserContext);

    return (
        <div className="account-layout">
            <MainNavigation />

            <div className="account-layout-main">
                <AccountSidebar user={user} />
                <Outlet />
            </div>
        </div>
    );
}

export default AccountLayout;