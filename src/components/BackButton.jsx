import { Link } from 'react-router-dom';
import backArrow from '../assets/images/backBtnArrow.svg';
const BackButton = () => {
  const handleLocalStorageClear = () => {
    localStorage.clear();
  };

  return (
    <button className='w-[40px] h-[40px] rounded-full bg-white overflow-hidden'>
      <Link
        to='/'
        className='w-full h-full flex items-center justify-center'
        onClick={() => {
          handleLocalStorageClear();
        }}
      >
        <img src={backArrow} alt='' />
      </Link>
    </button>
  );
};
export default BackButton;
