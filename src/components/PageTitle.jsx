import Underline from './Underline';
const PageTitle = ({ title, pageNum }) => {
  return (
    <section className='mb-[75px]'>
      <div className='flex justify-between items-center mb-3'>
        <h1 className='font-700 text-[24px] text-offBlack '>{title}</h1>
        <p className='text-[20px] font-400 text-offBlack'>{pageNum}/3</p>
      </div>
      <Underline />
    </section>
  );
};
export default PageTitle;
