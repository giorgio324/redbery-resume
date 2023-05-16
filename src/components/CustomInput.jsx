import { useDispatch } from 'react-redux';
import { useFormContext } from 'react-hook-form';
import { updatePrivateInfo } from '../features/PrivateInfoSlice';
const CustomInput = ({
  name,
  labelText,
  type,
  isTextArea,
  isFileInput,
  placeholder,
  hint,
}) => {
  const dispatch = useDispatch();
  const { register, setValue } = useFormContext();

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(name, value);
    dispatch(updatePrivateInfo({ fieldName: name, value }));
  };

  return (
    <>
      {isTextArea ? (
        // text area
        <div className='w-full flex flex-col'>
          <label htmlFor={name} className='font-500 text-black'>
            {labelText}
          </label>
          <textarea
            name={name}
            id={name}
            placeholder={placeholder}
            {...register(name)}
            onChange={handleChange}
            className='resize-none border border-validationDefault focus:outline-2 outline-validationDefault caret-caret placeholder:text-inputPlaceholder text-black font-400 rounded-[4px] py-[7px] px-4 my-2 h-[100px]'
          ></textarea>
        </div>
      ) : isFileInput ? (
        // file input
        <div className='flex gap-x-[20px]  items-center my-[50px]'>
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
        </div>
      ) : (
        // noraml input
        <div className='w-full flex flex-col'>
          <label htmlFor={name} className='font-500 text-black'>
            {labelText}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            {...register(name, { required: true })}
            onChange={handleChange}
            className='border border-validationDefault focus:outline-2 outline-validationDefault caret-caret placeholder:text-inputPlaceholder text-black font-400 rounded-[4px] py-[7px] px-4 my-2'
          />
          {hint && (
            <span className='font-300 text-[14px] text-hint'>{hint}</span>
          )}
        </div>
      )}
    </>
  );
};

export default CustomInput;
