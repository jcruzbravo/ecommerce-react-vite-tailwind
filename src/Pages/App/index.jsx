import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import "./App.css";

// We use useRoutes to create a router for our app.
const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
