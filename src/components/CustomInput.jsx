import { useDispatch } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import { updatePrivateInfo } from '../features/PrivateInfoSlice';
import errorIcon from '../assets/images/failedValidationIcon.svg';
import validatedIcon from '../assets/images/successValidationIcon.svg';

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
    setValue,
    formState: { errors, touchedFields },
  } = useFormContext();

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(name, value);
    dispatch(updatePrivateInfo({ fieldName: name, value }));
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
            name={name}
            className='bg-btnImageUpload transition-colors ease-in-out duration-300 hover:bg-blue-700 text-white font-400 rounded cursor-pointer py-1 px-5'
          >
            {labelText}
          </label>
          <input
            type='file'
            name={name}
            id={name}
            {...register(name)}
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
          <div className='flex items-center'>
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
              <img src={errorIcon} alt='Error' className='w-4 ml-2' />
            )}
            {isValidated && (
              <img src={validatedIcon} alt='Validation' className='w-4 ml-2' />
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
