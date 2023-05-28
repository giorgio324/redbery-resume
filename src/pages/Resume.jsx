import PrivateInfo from '../components/PrivateInfo';
import ResumeLayout from '../layout/ResumeLayout';
import Experience from '../components/Experience';
import Education from '../components/Education';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect } from 'react';
import { setPage } from '../features/PageSlice';
import {
  getPageNumberFromLocalStorage,
  getExperienceFromLocalStorage,
  getPrivateInfoFromLocalStorage,
  getEducationFromLocalStorage,
} from '../utils/Localstorage';
import FinalPageLayout from '../layout/FinalPageLayout';
const Resume = () => {
  const dispatch = useDispatch();
  // this useeffect gets the page number from localStorage if its there if not it sets it to 1
  useEffect(() => {
    const storedPageNumber = getPageNumberFromLocalStorage();
    if (storedPageNumber) {
      dispatch(setPage(storedPageNumber));
    } else {
      dispatch(setPage(1));
    }
  }, []);

  const { page } = useSelector((state) => state.page);
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      name: getPrivateInfoFromLocalStorage()?.name || '',
      surname: getPrivateInfoFromLocalStorage()?.surname || '',
      email: getPrivateInfoFromLocalStorage()?.email || '',
      phone_number: getPrivateInfoFromLocalStorage()?.phone_number || '',
      image: getPrivateInfoFromLocalStorage()?.image || '',
      experiences: getExperienceFromLocalStorage()?.experiences || [
        {
          position: '',
          employer: '',
          start_date: '',
          due_date: '',
          description: '',
        },
      ],
      educations: getEducationFromLocalStorage()?.educations || [
        {
          institute: '',
          degree: '',
          due_date: '',
          description: '',
        },
      ],
    },
  });

  return (
    <FormProvider {...methods}>
      {page <= 3 && (
        <ResumeLayout>
          {page === 1 && <PrivateInfo />}
          {page === 2 && <Experience />}
          {page === 3 && <Education />}
        </ResumeLayout>
      )}
      {page === 4 && <FinalPageLayout />}
    </FormProvider>
  );
};
export default Resume;
