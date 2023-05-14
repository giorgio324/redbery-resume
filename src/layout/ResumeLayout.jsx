import React from 'react';
import BackButton from '../components/BackButton';
import Preview from '../components/Preview';

const ResumeLayout = ({ children }) => {
  return (
    <main className='min-h-screen bg-grey grid grid-cols-[auto,auto] overflow-x-auto'>
      <section className='flex flex-grow p-[45px] gap-x-[60px]'>
        <BackButton />
        <div className='flex-grow'>{children}</div>
      </section>
      <div>
        <Preview />
      </div>
    </main>
  );
};

export default ResumeLayout;
