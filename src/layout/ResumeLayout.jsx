import React from 'react';
import BackButton from '../components/BackButton';
import Preview from '../components/Preview';

const ResumeLayout = ({ children }) => {
  return (
    <main className='min-h-screen bg-grey flex'>
      <section className='flex flex-grow p-[45px] gap-x-[60px]'>
        <BackButton />
        <div className='flex-grow'>{children}</div>
      </section>
      <div className='flex-grow'>
        <Preview />
      </div>
    </main>
  );
};

export default ResumeLayout;
