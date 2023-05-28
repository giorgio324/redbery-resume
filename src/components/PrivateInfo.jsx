import CustomInput from './CustomInput';
import PageTitle from './PageTitle';
import NavigationButtonContainer from './NavigationButtonContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import { updatePrivateInfo } from '../features/PrivateInfoSlice';
import { useEffect } from 'react';
import { getPrivateInfoFromLocalStorage } from '../utils/Localstorage';
const PrivateInfo = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const {
    setValue,
    formState: { touchedFields, errors },
    trigger,
  } = useFormContext();

  // this function is for validating the base64 image
  const validateBase64Image = (base64String) => {
    const validPrefixes = [
      'data:image/jpeg',
      'data:image/png',
      'data:image/webp',
    ];
    const prefixRegex = new RegExp(
      `^(${validPrefixes.join('|')});base64,`,
      'i'
    );
    return prefixRegex.test(base64String);
  };
  const convertFileToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const base64Data = reader.result;
      const isValidImage = validateBase64Image(base64Data);
      if (isValidImage) {
        callback(base64Data);
      } else {
        console.log('Invalid image file');
        callback('');
      }
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

  const handleInputChange = (e, name) => {
    const value = e.target.value;
    dispatch(updatePrivateInfo({ fieldName: name, value }));
  };
  const handleTrigger = async () => {
    const isValidFields = await trigger();
  };

  // this useEffect is for getting the data from localStorage and then setting it to the each field also if the data is in localStorage it triggers the validation
  useEffect(() => {
    const storedPrivateInfo = getPrivateInfoFromLocalStorage();
    if (storedPrivateInfo) {
      Object.entries(storedPrivateInfo).forEach(([fieldName, value]) => {
        setValue(fieldName, value, { shouldTouch: true }); // Set form field value
      });
      // turn the base64 string into a file and then set it to the image field but it doesnt work for now...
      // const blob = new Blob([storedPrivateInfo.image], { type: 'image/png' });
      // const file = new File([blob], 'image.png', { type: 'image/png' });
      // console.log('file', file);
      // setValue('image', file, { shouldValidate: true });
      handleTrigger();
    }
  }, [dispatch, setValue]);

  return (
    <form>
      <PageTitle title={'პირადი ინფო'} pageNum={page} />
      <div className='flex gap-x-[56px] mt-[75px]'>
        <CustomInput
          labelText={'სახელი'}
          name={'name'}
          placeholder={'ანზორ'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
          minLength={2}
          regex={/^[ა-ჰ]+$/}
          onChangeFunc={(e) => handleInputChange(e, 'name')}
          error={errors.name}
          touched={touchedFields.name}
        />
        <CustomInput
          labelText={'გვარი'}
          name={'surname'}
          placeholder={'მუმლაძე'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
          minLength={2}
          regex={/^[ა-ჰ]+$/}
          onChangeFunc={(e) => handleInputChange(e, 'surname')}
          error={errors.surname}
          touched={touchedFields.surname}
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
          error={errors.image}
          touched={touchedFields.image}
        />
      </div>
      <div>
        <CustomInput
          isTextArea
          labelText={'ჩემ შესახებ (არასავალდებულო)'}
          name={'about_me'}
          placeholder={'ზოგადი ინფო შენ შესახებ'}
          onChangeFunc={(e) => handleInputChange(e, 'about_me')}
          error={errors.about_me}
          touched={touchedFields.about_me}
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
          onChangeFunc={(e) => handleInputChange(e, 'email')}
          error={errors.email}
          touched={touchedFields.email}
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
          onChangeFunc={(e) => handleInputChange(e, 'phone_number')}
          error={errors.phone_number}
          touched={touchedFields.phone_number}
        />
      </div>
      <NavigationButtonContainer page={page} />
    </form>
  );
};
export default PrivateInfo;
