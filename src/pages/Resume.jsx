import PrivateInfo from '../components/PrivateInfo';
import ResumeLayout from '../layout/ResumeLayout';
import Experience from '../components/Experience';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect } from 'react';
import { setPage } from '../features/PageSlice';
import { getPageNumberFromLocalStorage } from '../utils/Localstorage';
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
      name: '',
      surname: '',
      email: '',
      phone_number: '',
      image: '',
      experiences: [
        {
          position: '',
          employer: '',
          start_date: '',
          due_date: '',
          description: '',
        },
      ],
    },
  });

  return (
    <FormProvider {...methods}>
      <ResumeLayout>
        {page === 1 && <PrivateInfo />}
        {page === 2 && <Experience />}
      </ResumeLayout>
    </FormProvider>
  );
};
export default Resume;
