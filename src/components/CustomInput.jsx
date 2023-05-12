const CustomInput = ({
  type,
  name,
  id,
  isTextBox,
  labelText,
  placeholder,
  hint,
}) => {
  return (
    <div className={`w-full flex flex-col`}>
      <label htmlFor={id} className='font-500 text-black'>
        {labelText}
      </label>
      {isTextBox ? (
        <textarea name={name} id={id} placeholder={placeholder}></textarea>
      ) : (
        <>
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className='border border-validationDefault focus:border-2 outline-none caret-caret placeholder:text-inputPlaceholder text-black font-400 rounded-[4px] py-[7px] px-4 my-2'
          />
          {hint && (
            <span className='font-300 text-[14px] text-hint'>{hint}</span>
          )}
        </>
      )}
    </div>
  );
};
export default CustomInput;
