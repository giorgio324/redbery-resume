import { useFormContext } from 'react-hook-form';
import errorIcon from '../assets/images/failedValidationIcon.svg';
import validatedIcon from '../assets/images/successValidationIcon.svg';
import { useState, useEffect } from 'react';
import { getPrivateInfoFromLocalStorage } from '../utils/Localstorage';
import { useSelector } from 'react-redux';
const CustomInput = ({
  name,
  labelText,
  type,
  isTextArea,
  isTextAreaRequired,
  isFileInput,
  placeholder,
  hint,
  minLength,
  regex,
  onChangeFunc,
  error,
}) => {
  const {
    register,
    formState: { errors, touchedFields },
    getValues,
  } = useFormContext();
  console.log('custominput', errors);
  const hasError = !!errors[name];
  const isTouched = !!touchedFields[name];
  const isValidated = isTouched && !hasError;
  const hasImage = getValues('image');
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    const storedPrivateInfo = getPrivateInfoFromLocalStorage();
    if (storedPrivateInfo) {
      setIsSaved(true);
    }
  }, []);
  const isImageUploaded = useSelector((state) => state.privateInfo.image);
  const imageUrl = useSelector((state) => state.privateInfo.imageUrl);

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
                  ? { value: true }
                  : { value: false },
              })}
              onChange={onChangeFunc}
              className={`resize-none border ${
                hasError
                  ? 'border-validationDanger'
                  : isTouched || (isSaved && !hasError && !isTextAreaRequired)
                  ? 'border-validationSuccess'
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
          <input
            type={type}
            name={name}
            id={name}
            {...register(name, { required: { value: true } })}
            onChange={onChangeFunc}
            defaultValue={imageUrl ? imageUrl : null}
          />
          {!isImageUploaded && (
            <img src={errorIcon} alt='Error' className='w-4 ml-2' />
          )}
          {(isValidated || isImageUploaded) && (
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
                required: { value: true },
                minLength: minLength ? { value: minLength } : false,
                pattern: regex ? { value: regex } : false,
              })}
              onChange={onChangeFunc}
              className={`border ${
                hasError
                  ? 'border-validationDanger'
                  : isTouched || (isSaved && !hasError)
                  ? 'border-validationSuccess'
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
            {isSaved && !hasError && (
              <img
                src={validatedIcon}
                alt='Validation'
                className='w-4 ml-2 absolute -right-7'
              />
            )}
            {!isSaved && isValidated && (
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
