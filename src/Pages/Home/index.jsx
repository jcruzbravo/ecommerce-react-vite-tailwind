import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map((item) => <Card key={item.id} data={item} />);
      } else {
        return <h2>Products not found ☹️</h2>
      }
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4 justify-center mb-5">
        <h1 className="font-medium text-xl">Exclusive products</h1>
        <input
          className="border-2 border-black rounded-lg w-80 p-4 focus:outline-none"
          type="text"
          placeholder="Search a product"
          onChange={(e) => context.setSearchByTitle(e.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
