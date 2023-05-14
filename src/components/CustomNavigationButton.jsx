const CustomNavigationButton = ({ title, type }) => {
  return (
    <button
      type={type}
      className={`font-500 text-white bg-btnPageChange py-[12px] px-[35px] rounded
      transition-colors duration-300 ease-in-out hover:bg-btnPageChangeHover active:bg-btnPageChangeActive`}
    >
      {title}
    </button>
  );
};
export default CustomNavigationButton;
