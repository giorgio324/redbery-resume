import React from 'react';
import BackButton from '../components/BackButton';
import PreviewContainer from '../components/PreviewContainer';

const ResumeLayout = ({ children }) => {
  return (
    <main className='min-h-screen bg-grey grid grid-cols-[1fr,auto] overflow-x-auto'>
      <section className='flex flex-grow py-[45px] pl-[50px] pr-[150px]  gap-x-[60px]'>
        <BackButton />
        <div className='flex-grow w-full'>{children}</div>
      </section>
      <div>
        <PreviewContainer />
      </div>
    </main>
  );
};

export default ResumeLayout;
