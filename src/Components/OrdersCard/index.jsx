const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  return (
    <>
      <div className="flex justify-between items-center my-3 px-3 border border-black rounded-lg w-80">
        <div className="flex justify-between w-full">
          <p className="flex flex-col items-center">
            <span className="font-light">Date: {date}</span>
            <span className="font-medium">{totalProducts} articles</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-2xl">${totalPrice}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default OrdersCard;
