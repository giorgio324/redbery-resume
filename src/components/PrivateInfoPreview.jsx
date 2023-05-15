import placeholder from '../assets/images/placeholderImg.png';
import emailIcon from '../assets/images/emailIcon.svg';
import phoneIcon from '../assets/images/phoneIcon.svg';

const PrivateInfoPreview = () => {
  return (
    <div className='flex'>
      <section>
        <div className='flex gap-x-[20px] text-[34px] font-700 text-primary break-words mt-[20px]'>
          <h1>ᲐᲜᲖᲝᲠ ᲛᲣᲛᲚᲐᲫ</h1>
        </div>
        <div className='text-offBlack text-[18px] font-400 mt-4'>
          <div className='flex gap-x-3'>
            <img src={emailIcon} alt='' />
            <p>anzorr666@gmail.com</p>
          </div>
          <div className='flex gap-x-3 mt-[10px]'>
            <img src={phoneIcon} alt='' />
            <p>+995 597 63 45 16</p>
          </div>
        </div>
        <div className='max-w-[430px] mt-9'>
          <h4 className='text-primary text-[18px] font-700'>ჩემ შესახებ</h4>
          <p className='mt-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, minus
            facilis vero qui excepturi expeditaᲐᲜᲖᲝᲠᲐᲜᲖᲝᲠᲐᲜᲖᲝᲠᲐᲜᲖᲝᲠ.
          </p>
        </div>
      </section>

      <img
        src={placeholder}
        alt=''
        className='w-[246px] h-[246px] rounded-full object-cover'
      />
    </div>
  );
};

export default PrivateInfoPreview;
