import CustomNavigationButton from './CustomNavigationButton';
const NavigationButtonContainer = ({ page }) => {
  return (
    <div
      className={
        page > 1
          ? 'flex justify-between mt-[160px]'
          : 'flex justify-end mt-[160px]'
      }
    >
      {page > 1 && <CustomNavigationButton title={'უკან'} type={'button'} />}
      <CustomNavigationButton title={'შემდეგი'} type={'button'} next />
    </div>
  );
};
export default NavigationButtonContainer;
