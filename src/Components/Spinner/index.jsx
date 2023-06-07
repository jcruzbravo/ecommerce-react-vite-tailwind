import { FadeLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center m-6'>
      <FadeLoader color="#36d7b7"/>
    </div>
  )
}

export default Spinner;