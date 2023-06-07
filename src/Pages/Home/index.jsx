import { Suspense, useContext, useState } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import Paginator from "../../Components/Paginator";
import Spinner from "../../Components/Spinner";

const Home = () => {
  const context = useContext(ShoppingCartContext);
  const [page, setPage] = useState(1);
  const [byPage, setByPage] = useState(12);
  const maximum = Math.ceil(context.filteredItems?.length / byPage);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems
        ?.slice((page - 1) * byPage, (page - 1) * byPage + byPage)
        .map((item) => <Card key={item.id} data={item} />);
    } else {
      return <h2>Products not found ☹️</h2>;
    }
  };

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <div className="flex flex-col items-center gap-4 justify-center mb-5">
          <h1 className="font-medium text-xl">Exclusive products</h1>
          <input
            className="border-2 border-black rounded-lg w-80 p-4 focus:outline-none"
            type="text"
            placeholder="Search a product"
            onChange={(e) => context.setSearchByTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <Paginator page={page} setPage={setPage} maximum={maximum} />
        <ProductDetail />
      </Suspense>
    </Layout>
  );
};

export default Home;
