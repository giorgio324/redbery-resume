import { Link } from 'react-router-dom';
import backArrow from '../assets/images/backBtnArrow.svg';
import { clearPrivateInfo } from '../features/PrivateInfoSlice';
import { clearExperience } from '../features/ExperienceSlice';
import { clearEducation } from '../features/EducationSlice';
import { useDispatch } from 'react-redux';
const BackButton = () => {
  const dispatch = useDispatch();
  const handleLocalStorageClear = () => {
    localStorage.clear();
    dispatch(clearPrivateInfo());
    dispatch(clearExperience());
    dispatch(clearEducation());
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
