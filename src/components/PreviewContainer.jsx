import PrivateInfoPreview from './PrivateInfoPreview';
import ExperiencePreview from './ExperiencePreview';
import watermark from '../assets/images/previewWatermark.svg';
const PreviewContainer = () => {
  return (
    <section className='relative min-h-screen bg-white min-w-[820px] max-w-[820px] px-[80px] pt-[50px] pb-[144px]'>
      <PrivateInfoPreview />
      <ExperiencePreview />
      <img
        src={watermark}
        alt='watermark'
        className='absolute bottom-[44px] left-[80px]'
      />
    </section>
  );
};
export default PreviewContainer;
