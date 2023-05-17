import CustomInput from './CustomInput';
import PageTitle from './PageTitle';
import NavigationButtonContainer from './NavigationButtonContainer';
import { useSelector } from 'react-redux';
import { useFormContext } from 'react-hook-form';
const PrivateInfo = () => {
  const { page } = useSelector((state) => state.page);
  const { handleSubmit, watch } = useFormContext();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PageTitle title={'პირადი ინფო'} pageNum={page} />
      <div className='flex gap-x-[56px]'>
        <CustomInput
          labelText={'სახელი'}
          name={'name'}
          placeholder={'ანზორ'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
        />
        <CustomInput
          labelText={'გვარი'}
          name={'surname'}
          placeholder={'მუმლაძე'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
        />
      </div>
      <div>
        <CustomInput
          hint={'პირადი ფოტოს ატვირთვა'}
          name={'image'}
          isFileInput
          labelText={'ატვირთვა'}
        />
      </div>
      <div>
        <CustomInput
          isTextArea
          labelText={'ჩემ შესახებ (არასავალდებულო)'}
          name={'about_me'}
          placeholder={'ზოგადი ინფო შენ შესახებ'}
        />
      </div>
      <div className='mt-[30px]'>
        <CustomInput
          name={'email'}
          type={'email'}
          labelText={'ელ.ფოსტა'}
          placeholder={'anzorr666@redberry.ge'}
          hint={'უნდა მთავრდებოდეს @redberry.ge-ით'}
        />
      </div>
      <div className='mt-[30px]'>
        <CustomInput
          name={'phone_number'}
          type={'phone_number'}
          labelText={'მობილურის ნომერი'}
          placeholder={'+995 551 12 34 56'}
          hint={'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'}
        />
      </div>
      <NavigationButtonContainer page={page} />
    </form>
  );
};
export default PrivateInfo;
