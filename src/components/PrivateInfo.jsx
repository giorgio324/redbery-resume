import CustomInput from './CustomInput';
import PageTitle from './PageTitle';
import NavigationButtonContainer from './NavigationButtonContainer';
import { useSelector } from 'react-redux';
const PrivateInfo = () => {
  const { page } = useSelector((state) => state.page);
  return (
    <>
      <PageTitle title={'პირადი ინფო'} pageNum={page} />
      <div className='flex gap-x-[56px]'>
        <CustomInput
          id={'name'}
          labelText={'სახელი'}
          name={'name'}
          placeholder={'ანზორ'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
        />
        <CustomInput
          id={'lastname'}
          labelText={'გვარი'}
          name={'lastname'}
          placeholder={'მუმლაძე'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
        />
      </div>
      <div>
        <CustomInput
          hint={'პირადი ფოტოს ატვირთვა'}
          id={'image'}
          isFileInput
          labelText={'ატვირთვა'}
        />
      </div>
      <div>
        <CustomInput
          isTextBox={true}
          labelText={'ჩემ შესახებ (არასავალდებულო)'}
          name={'about_me'}
          id={'about_me'}
          placeholder={'ზოგადი ინფო შენ შესახებ'}
        />
      </div>
      <div className='mt-[30px]'>
        <CustomInput
          name={'email'}
          id={'email'}
          type={'email'}
          labelText={'ელ.ფოსტა'}
          placeholder={'anzorr666@redberry.ge'}
          hint={'უნდა მთავრდებოდეს @redberry.ge-ით'}
        />
      </div>
      <div className='mt-[30px]'>
        <CustomInput
          name={'phoneNumber'}
          id={'phoneNumber'}
          type={'phoneNumber'}
          labelText={'მობილურის ნომერი'}
          placeholder={'+995 551 12 34 56'}
          hint={'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'}
        />
      </div>
      <NavigationButtonContainer page={page} />
    </>
  );
};
export default PrivateInfo;
