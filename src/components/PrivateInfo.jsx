import CustomInput from './CustomInput';
import PageTitle from './PageTitle';

const PrivateInfo = () => {
  return (
    <>
      <PageTitle title={'პირადი ინფო'} pageNum={1} />
      <div className='flex gap-x-[56px]'>
        <CustomInput
          id={'name'}
          labelText={'სახელი'}
          name={'name'}
          placeholder={'ანზორ'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
        />
        <CustomInput
          id={'lastname'}
          labelText={'გვარი'}
          name={'lastname'}
          placeholder={'მუმლაძე'}
          type={'text'}
          hint={'მინიმუმ 2 ასო, ქართული ასოები'}
        />
      </div>
      <div>
        <CustomInput
          hint={'პირადი ფოტოს ატვირთვა'}
          id={'image'}
          isFileInput
          labelText={'ატვირთვა'}
        />
      </div>
    </>
  );
};
export default PrivateInfo;
