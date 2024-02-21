import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/root-layout";
import AuthLayout from "./components/auth-layout";
import AccountLayout from "./components/account-layout";
import AccountHome from "./components/account/account-home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ]
  },
  {
    path: "/account",
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <AccountHome />,
      },
    ]
  },
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
