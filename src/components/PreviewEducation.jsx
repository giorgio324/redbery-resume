import { useSelector } from 'react-redux';
const PreviewEducation = () => {
  const { educations } = useSelector((state) => state.education);
  return (
    <section>
      <div className='h-[1px] bg-previewUnderline mt-5'></div>
      <h4 className='text-primary text-[18px] font-700 mt-6'>განათლება</h4>
      {educations.map((education, index) => {
        return (
          <div key={index} className='my-4'>
            <div className='flex text-offBlack font-500 text-lg gap-x-2'>
              {education.institute && <h1>{education.institute},</h1>}
              {education.degree && <h1>{education.degree}</h1>}
            </div>
            <div className='flex text-datesPreview font-400 italic mt-2'>
              <h1>{education.due_date}</h1>
            </div>
            <div className='mt-4'>
              <h1>{education.description}</h1>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default PreviewEducation;
