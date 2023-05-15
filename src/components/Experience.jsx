import NavigationButtonContainer from './NavigationButtonContainer';
import PageTitle from './PageTitle';
import { useSelector } from 'react-redux';
const Experience = () => {
  const { page } = useSelector((state) => state.page);
  return (
    <>
      <PageTitle title={'გამოცდილება'} pageNum={page} />
      <NavigationButtonContainer page={page} />
    </>
  );
};
export default Experience;
