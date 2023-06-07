import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Paginator = ({ page, setPage, maximum }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      setPage(parseInt(e.target.value));
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > Math.ceil(maximum) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <button disabled={page === 1 || page < 1} onClick={previousPage}>
        <GrPrevious />
      </button>
      <input
        className="text-center bg-gray-300 rounded-lg text-black"
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p> de {maximum}</p>
      <button  disabled={page === Math.ceil(maximum) || page > Math.ceil(maximum)} onClick={nextPage}>
        <GrNext />
      </button>
    </div>
  );
};

export default Paginator;
