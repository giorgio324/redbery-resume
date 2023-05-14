const CustomInput = ({
  type,
  name,
  id,
  isTextBox,
  isFileInput,
  labelText,
  placeholder,
  hint,
  onChange,
}) => {
  return (
    <>
      {isTextBox ? (
        <div className='w-full flex flex-col'>
          <label htmlFor={id} className='font-500 text-black'>
            {labelText}
          </label>
          <textarea
            name={name}
            id={id}
            placeholder={placeholder}
            className='resize-none border border-validationDefault focus:outline-2 outline-validationDefault caret-caret placeholder:text-inputPlaceholder text-black font-400 rounded-[4px] py-[7px] px-4 my-2 h-[100px]'
          ></textarea>
        </div>
      ) : isFileInput ? (
        <div className='flex gap-x-[20px]  items-center my-[50px]'>
          {hint && (
            <span className='font-500 text-[18px] text-offBlack'>{hint}</span>
          )}
          <label
            htmlFor={id}
            className='bg-btnImageUpload transition-colors ease-in-out duration-300 hover:bg-blue-700 text-white font-400 rounded cursor-pointer py-1 px-5'
          >
            {labelText}
          </label>
          <input type='file' name={name} id={id} className='hidden' />
        </div>
      ) : (
        <div className='w-full flex flex-col'>
          <label htmlFor={id} className='font-500 text-black'>
            {labelText}
          </label>
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
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
