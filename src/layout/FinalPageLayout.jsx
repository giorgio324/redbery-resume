import React from 'react';
import BackButton from '../components/BackButton';
import PreviewContainer from '../components/PreviewContainer';
import PopUp from '../components/PopUp';

const FinalPageLayout = () => {
  return (
    <main className='min-h-screen bg-white grid grid-cols-[auto,1fr] overflow-x-auto pt-[45px] pl-[50px] pb-[120px]'>
      <div>
        <BackButton />
      </div>
      <section className='relative flex flex-col items-center flex-grow gap-x-[60px]'>
        <div className='flex-grow flex flex-col items-center justify-center'>
          <PreviewContainer />
        </div>
        <div className='absolute top-0 right-0'>
          <PopUp />
        </div>
      </section>
    </main>
  );
};

export default FinalPageLayout;
