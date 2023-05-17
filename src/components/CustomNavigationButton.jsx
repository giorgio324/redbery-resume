import { prevPage, nextPage } from '../features/PageSlice';
import { useDispatch } from 'react-redux';
import { useFormContext } from 'react-hook-form';

const CustomNavigationButton = ({ title, type, next }) => {
  const dispatch = useDispatch();
  const {
    formState: { isValid },
    trigger,
  } = useFormContext();

  const handleClick = () => {
    if (isValid) {
      dispatch(nextPage());
    } else {
      trigger(['name', 'surname', 'email', 'phone_number']);
    }
  };

  return (
    <button
      type={type}
      className={`font-500 text-white bg-btnPageChange py-[12px] px-[35px] rounded
      transition-colors duration-300 ease-in-out hover:bg-btnPageChangeHover active:bg-btnPageChangeActive`}
      onClick={() => (next ? handleClick() : dispatch(prevPage()))}
    >
      {title}
    </button>
  );
};

export default CustomNavigationButton;
