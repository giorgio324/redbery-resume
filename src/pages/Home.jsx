import { Link } from 'react-router-dom';
import logo from '../assets/images/logoPage1.svg';
import wattermark from '../assets/images/watermarkPage1.svg';
import Underline from '../components/Underline';
const Home = () => {
  return (
    <main className='min-h-screen bg-pageOneBg flex flex-col'>
      <section className='mx-[70px] flex flex-col flex-grow'>
        <header>
          <img src={logo} alt='redberry logo' className='py-[25px]' />
          <Underline />
        </header>
        <div className='relative flex flex-grow justify-center items-center'>
          <Link
            to={'/resume'}
            className='w-[464px] p-[18px] bg-offBlack rounded-lg text-white text-[20px] font-500 text-center'
          >
            ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
          </Link>
          <img
            src={wattermark}
            alt=''
            className='hidden lg:block absolute top-1/2 left-1/2 transform translate-x-1/3 -translate-y-1/4 -z-10'
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
