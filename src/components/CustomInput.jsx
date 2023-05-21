import { useFormContext } from 'react-hook-form';
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
  minLength,
  regex,
  onChangeFunc,
}) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

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
                required: isTextAreaRequired ? { value: true } : false,
              })}
              onChange={onChangeFunc}
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
          <input
            type={type}
            name={name}
            id={name}
            {...register(name, { required: { value: true } })}
            onChange={onChangeFunc}
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
                required: { value: true },
                minLength: minLength ? { value: minLength } : false,
                pattern: regex ? { value: regex } : false,
              })}
              onChange={onChangeFunc}
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
