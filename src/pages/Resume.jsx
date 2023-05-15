import PrivateInfo from '../components/PrivateInfo';
import ResumeLayout from '../layout/ResumeLayout';
import Experience from '../components/Experience';
import { useSelector } from 'react-redux';
const Resume = () => {
  const { page } = useSelector((state) => state.page);
  return (
    <ResumeLayout>
      {page === 1 && <PrivateInfo />}
      {page === 2 && <Experience />}
    </ResumeLayout>
  );
};
export default Resume;
