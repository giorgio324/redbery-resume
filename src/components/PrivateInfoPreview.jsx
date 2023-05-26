import emailIcon from '../assets/images/emailIcon.svg';
import phoneIcon from '../assets/images/phoneIcon.svg';
import { useSelector } from 'react-redux';
const PrivateInfoPreview = () => {
  const { name, surname, about_me, email, phone_number, image } = useSelector(
    (state) => state.privateInfo
  );
  return (
    <div className='flex'>
      <section>
        <div className='flex gap-x-[20px] text-[34px] font-700 text-primary break-words mt-[20px]'>
          <h1>
            {name} {surname}
          </h1>
        </div>
        <div className='text-offBlack text-[18px] font-400 mt-4'>
          {email && (
            <div className='flex gap-x-3'>
              <img src={emailIcon} alt='' />
              <p>{email}</p>
            </div>
          )}
          {phone_number && (
            <div className='flex gap-x-3 mt-[10px]'>
              <img src={phoneIcon} alt='' />
              <p>
                {phone_number.slice(0, 4) +
                  ' ' +
                  phone_number.slice(4, 7) +
                  ' ' +
                  phone_number.slice(7, 9) +
                  ' ' +
                  phone_number.slice(9, 11) +
                  ' ' +
                  phone_number.slice(11, 13)}
              </p>
            </div>
          )}
        </div>
        <div className='max-w-[430px] min-w-[390px] mt-9'>
          {about_me && (
            <>
              <h4 className='text-primary text-[18px] font-700'>ჩემ შესახებ</h4>
              <p className='mt-4'>{about_me}</p>
            </>
          )}
        </div>
      </section>

      {image ? (
        <img
          src={image}
          alt=''
          className='w-[246px] h-[246px] rounded-full object-cover'
        />
      ) : null}
    </div>
  );
};

export default PrivateInfoPreview;
