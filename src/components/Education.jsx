import NavigationButtonContainer from './NavigationButtonContainer';
import CustomInput from './CustomInput';
import PageTitle from './PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { updateEducation, addEducation } from '../features/EducationSlice';
const Education = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);

  return (
    <>
      <PageTitle title={'განათლება'} pageNum={page}></PageTitle>
      <form></form>
      <NavigationButtonContainer page={page} />
    </>
  );
};
export default Education;
