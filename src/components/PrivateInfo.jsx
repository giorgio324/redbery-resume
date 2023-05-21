import CustomInput from './CustomInput';
import PageTitle from './PageTitle';
import NavigationButtonContainer from './NavigationButtonContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import { updatePrivateInfo } from '../features/PrivateInfoSlice';
const PrivateInfo = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const { handleSubmit, watch } = useFormContext();
  const onSubmit = (data) => {
    console.log(data);
  };
  const convertFileToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const base64Data = reader.result.split(',')[1];
      callback(base64Data);
    };
    reader.onerror = function (error) {
      console.log('Error converting file to base64:', error);
    };
  };
  const handleImageChange = (e, name) => {
    const file = e.target.files[0];
    if (file) {
      convertFileToBase64(file, (base64Data) => {
        dispatch(updatePrivateInfo({ fieldName: name, value: base64Data }));
      });
    } else {
      dispatch(updatePrivateInfo({ fieldName: name, value: '' }));
    }
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
          minLength={2}
          regex={/^[ა-ჰ]+$/}
        />
        <CustomInput
          labelText={'გვარი'}
          name={'surname'}
          placeholder={'მუმლაძე'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
          minLength={2}
          regex={/^[ა-ჰ]+$/}
        />
      </div>
      <div>
        <CustomInput
          hint={'პირადი ფოტოს ატვირთვა'}
          name={'image'}
          isFileInput
          labelText={'ატვირთვა'}
          type={'file'}
          onChangeFunc={(e) => handleImageChange(e, 'image')}
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
          regex={/^[\w\.-]+@redberry\.ge$/}
        />
      </div>
      <div className='mt-[30px]'>
        <CustomInput
          name={'phone_number'}
          type={'phone_number'}
          labelText={'მობილურის ნომერი'}
          placeholder={'+995 551 12 34 56'}
          hint={'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'}
          regex={/^(\+995)(5\d{2})(\d{2})(\d{2})(\d{2})$/}
        />
      </div>
      <NavigationButtonContainer page={page} />
    </form>
  );
};
export default PrivateInfo;
