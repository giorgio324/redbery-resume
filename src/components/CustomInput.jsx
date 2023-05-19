import { useDispatch } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import { updatePrivateInfo } from '../features/PrivateInfoSlice';
import errorIcon from '../assets/images/failedValidationIcon.svg';
import validatedIcon from '../assets/images/successValidationIcon.svg';

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

const CustomInput = ({
  name,
  labelText,
  type,
  isTextArea,
  isTextAreaRequired,
  isFileInput,
  placeholder,
  hint,
}) => {
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    formState: { errors, touchedFields },
    setValue,
  } = useFormContext();
  console.log(getValues());
  const handleChange = (e) => {
    if (isFileInput) {
      const file = e.target.files[0];
      if (file) {
        convertFileToBase64(file, (base64Data) => {
          setValue(name, base64Data);
          dispatch(updatePrivateInfo({ fieldName: name, value: base64Data }));
        });
      } else {
        // Handle the case when the user cancels the file upload
        setValue(name, '');
        dispatch(updatePrivateInfo({ fieldName: name, value: '' }));
      }
    } else {
      const value = e.target.value;
      setValue(name, value);
      dispatch(updatePrivateInfo({ fieldName: name, value }));
    }
  };

  const hasError = !!errors[name];
  const isTouched = !!touchedFields[name];
  const isValidated = isTouched && !hasError;
  return (
    <>
      {isTextArea ? (
        // text area
        <div className='w-full flex flex-col'>
          <label htmlFor={name} className='font-500 text-black'>
            {labelText}
          </label>
          <div className='flex flex-col'>
            <textarea
              name={name}
              id={name}
              placeholder={placeholder}
              {...register(name, {
                required: isTextAreaRequired
                  ? { value: true, message: 'This field is required' }
                  : false,
              })}
              onChange={handleChange}
              className={`resize-none border ${
                hasError
                  ? 'border-red-500'
                  : isTouched && !isTextAreaRequired
                  ? 'border-green-500'
                  : 'border-validationDefault'
              } focus:outline-2 outline-validationDefault caret-caret placeholder:text-inputPlaceholder text-black h-[100px] font-400 rounded-[4px] py-[7px] px-4`}
            ></textarea>
          </div>
        </div>
      ) : isFileInput ? (
        // file input
        <div className='flex gap-x-[20px] items-center my-[50px]'>
          {hint && (
            <span className='font-500 text-[18px] text-offBlack'>{hint}</span>
          )}
          <label
            htmlFor={name}
            className='bg-btnImageUpload transition-colors ease-in-out duration-300 hover:bg-blue-700 text-white font-400 rounded cursor-pointer py-1 px-5'
          >
            {labelText}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            {...register(name, { required: 'This field is required' })}
            onChange={handleChange}
            className='hidden'
          />
          {hasError && <img src={errorIcon} alt='Error' className='w-4 ml-2' />}
          {isValidated && (
            <img src={validatedIcon} alt='Validation' className='w-4 ml-2' />
          )}
        </div>
      ) : (
        // normal input
        <div className='w-full flex flex-col'>
          <label htmlFor={name} className='font-500 text-black'>
            {labelText}
          </label>
          <div className='flex items-center relative'>
            <input
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
              {...register(name, {
                required: { value: true, message: 'This field is required' },
              })}
              onChange={handleChange}
              className={`border ${
                hasError
                  ? 'border-red-500'
                  : isTouched
                  ? 'border-green-500'
                  : 'border-validationDefault'
              } focus:outline-2 outline-validationDefault caret-caret placeholder:text-inputPlaceholder text-black font-400 rounded-[4px] py-[7px] px-4 flex-grow`}
            />
            {hasError && (
              <img
                src={errorIcon}
                alt='Error'
                className='w-4 ml-2 absolute -right-7'
              />
            )}
            {isValidated && (
              <img
                src={validatedIcon}
                alt='Validation'
                className='w-4 ml-2 absolute right-4'
              />
            )}
          </div>
          {hint && (
            <span className='font-300 text-[14px] text-hint mt-1'>{hint}</span>
          )}
        </div>
      )}
    </>
  );
};

export default CustomInput;
