import { useSelector } from 'react-redux';
const ExperiencePreview = () => {
  const { experiences } = useSelector((state) => state.experience);
  console.log('e', experiences);
  return (
    <section>
      <div className='h-[1px] bg-previewUnderline mt-5'></div>
      <h4 className='text-primary text-[18px] font-700 mt-6'>ჩემ შესახებ</h4>
      {experiences.map((experience, index) => {
        return (
          <div key={index} className='my-4'>
            <div className='flex text-offBlack font-500 text-lg gap-x-2'>
              {experience.position && <h1>{experience.position},</h1>}
              {experience.employer && <h1>{experience.employer}</h1>}
            </div>
            <div className='flex text-datesPreview font-400 italic mt-2'>
              <h1>{experience.start_date}</h1>
              {experience.start_date && experience.due_date && (
                <span className='px-1'>-</span>
              )}
              <h1>{experience.due_date}</h1>
            </div>
            <div className='mt-4'>
              <h1>{experience.description}</h1>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default ExperiencePreview;
