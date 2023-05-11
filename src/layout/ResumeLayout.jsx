import BackButton from '../components/BackButton';
import Preview from '../components/Preview';
const ResumeLayout = ({ children }) => {
  return (
    <main className='min-h-screen bg-grey'>
      <BackButton />
      {children}
      <Preview />
    </main>
  );
};
export default ResumeLayout;
