import PrivateInfo from '../components/PrivateInfo';
import ResumeLayout from '../layout/ResumeLayout';
import Experience from '../components/Experience';
import { useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
const Resume = () => {
  const { page } = useSelector((state) => state.page);
  const methods = useForm({ mode: 'all' });

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
