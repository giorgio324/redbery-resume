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
  error,
  touched,
}) => {
  const { register } = useFormContext();
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
                error
                  ? 'border-validationDanger'
                  : !error && touched
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
            {...register(name, {
              required: { value: true },
            })}
            onChange={onChangeFunc}
          />
          {error && <img src={errorIcon} alt='Error' className='w-4 ml-2' />}
          {!error && touched && (
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
                error
                  ? 'border-validationDanger'
                  : !error && touched
                  ? 'border-validationSuccess'
                  : 'border-validationDefault'
              } focus:outline-2 outline-validationDefault caret-caret placeholder:text-inputPlaceholder text-black font-400 rounded-[4px] py-[10px] px-4 flex-grow`}
            />

            {type !== 'date' && error && (
              <img
                src={errorIcon}
                alt='Error'
                className='w-4 ml-2 absolute -right-7'
              />
            )}
            {type !== 'date' && !error && touched && (
              <img
                src={validatedIcon}
                alt='Validated'
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
