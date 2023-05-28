import { useState } from 'react';
import closeIcon from '../assets/images/closePopUp.svg';
const PopUp = () => {
  const [show, setShow] = useState(true);
  return show ? (
    <div className='relative rounded-lg shadow-2xl bg-white p-8 w-[427px] mr-[40px]'>
      <div className='p-2'>
        <button
          className='absolute top-3 right-4'
          onClick={() => setShow(false)}
        >
          <img src={closeIcon} alt='Close' className='w-4' />
        </button>
        <h2 className='text-[24px] font-500 text-offBlack'>
          რეზიუმე წარმატებით გაიგზავნა 🎉
        </h2>
      </div>
    </div>
  ) : null;
};
export default PopUp;
