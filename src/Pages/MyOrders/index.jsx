import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  

  return (
    <Layout>
      <h1 className="font-medium text-xl">My Orders</h1>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.total}
            />
          </Link>
        ))
      }
    </Layout>
  );
};

export default MyOrders;
