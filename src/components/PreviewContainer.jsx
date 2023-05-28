import PrivateInfoPreview from './PrivateInfoPreview';
import ExperiencePreview from './ExperiencePreview';
import PreviewEducation from './PreviewEducation';
import watermark from '../assets/images/previewWatermark.svg';
import { useSelector } from 'react-redux';
const PreviewContainer = () => {
  const { page } = useSelector((state) => state.page);
  return (
    <section
      className={`relative min-h-screen bg-white min-w-[820px] max-w-[820px] px-[80px] pt-[50px] pb-[130px] ${
        page > 3 && 'border border-black min-h-[940px]'
      }`}
    >
      <PrivateInfoPreview />
      {page > 1 && <ExperiencePreview />}
      {page > 2 && <PreviewEducation />}
      <img
        src={watermark}
        alt='watermark'
        className='absolute bottom-[44px] left-[80px]'
      />
    </section>
  );
};
export default PreviewContainer;
