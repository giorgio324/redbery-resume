import { prevPage, nextPage } from '../features/PageSlice';
import { useDispatch } from 'react-redux';
const CustomNavigationButton = ({ title, type, next }) => {
  const dispatch = useDispatch();
  return (
    <button
      type={type}
      className={`font-500 text-white bg-btnPageChange py-[12px] px-[35px] rounded
      transition-colors duration-300 ease-in-out hover:bg-btnPageChangeHover active:bg-btnPageChangeActive`}
      onClick={() => dispatch(next ? nextPage() : prevPage())}
    >
      {title}
    </button>
  );
};
export default CustomNavigationButton;
