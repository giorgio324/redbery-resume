import NavigationButtonContainer from './NavigationButtonContainer';
import PageTitle from './PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useFormContext, useFieldArray } from 'react-hook-form';
import CustomInput from './CustomInput';
import { updateExperience, addExperience } from '../features/ExperienceSlice';
import { getEducationFromLocalStorage } from '../utils/Localstorage';
import { useEffect } from 'react';
const Experience = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, touchedFields },
    trigger,
  } = useFormContext();
  const { fields, append } = useFieldArray({
    name: 'experiences',
    control,
  });
  console.log('values', getValues());
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(getEducationFromLocalStorage()?.experiences);
  const handleInputChange = (e, name, index) => {
    const value = e.target.value;
    dispatch(updateExperience({ index, fieldName: name, value }));
  };

  const handleAddField = () => {
    dispatch(addExperience());
    append({
      position: '',
      employer: '',
      start_date: '',
      due_date: '',
      description: '',
    });
  };
  const handleTrigger = async () => {
    const isValidFields = await trigger();
  };
  useEffect(() => {
    const storedEducations = getEducationFromLocalStorage();
    if (storedEducations) {
      handleTrigger();
    }
  }, [dispatch]);
  return (
    <>
      <PageTitle title={'გამოცდილება'} pageNum={page} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields &&
          fields.map((field, index) => (
            <div key={field.id}>
              <div className='mb-[30px] mt-[75px]'>
                <CustomInput
                  labelText={'თანამდებობა'}
                  name={`experiences[${index}].position`}
                  type={'text'}
                  placeholder={'დეველოპერი, დიზაინერი, ა.შ.'}
                  minLength={2}
                  onChangeFunc={(e) => handleInputChange(e, 'position', index)}
                  error={errors.experiences?.[index]?.position}
                  touched={touchedFields.experiences?.[index]?.position}
                  hint={'მინიმუმ 2 სიმბოლო'}
                />
              </div>
              <div className='mb-[30px]'>
                <CustomInput
                  labelText={'დამსაქმებელი'}
                  name={`experiences[${index}].employer`}
                  type={'text'}
                  placeholder={'დამსაქმებელი'}
                  minLength={2}
                  onChangeFunc={(e) => handleInputChange(e, 'employer', index)}
                  error={errors.experiences?.[index]?.employer}
                  touched={touchedFields.experiences?.[index]?.employer}
                  hint={'მინიმუმ 2 სიმბოლო'}
                />
              </div>
              <div className='mb-[30px] flex gap-x-[56px]'>
                <CustomInput
                  labelText={'დაწყების თარიღი'}
                  name={`experiences[${index}].start_date`}
                  type={'date'}
                  onChangeFunc={(e) =>
                    handleInputChange(e, 'start_date', index)
                  }
                  error={errors.experiences?.[index]?.start_date}
                  touched={touchedFields.experiences?.[index]?.start_date}
                />
                <CustomInput
                  labelText={'დასრულების თარიღი'}
                  name={`experiences[${index}].due_date`}
                  type={'date'}
                  onChangeFunc={(e) => handleInputChange(e, 'due_date', index)}
                  error={errors.experiences?.[index]?.due_date}
                  touched={touchedFields.experiences?.[index]?.due_date}
                />
              </div>
              <div className='mb-[58px]'>
                <CustomInput
                  isTextArea
                  isTextAreaRequired={true}
                  labelText={'აღწერა'}
                  name={`experiences[${index}].description`}
                  type={'text'}
                  placeholder={'აღწერა'}
                  minLength={2}
                  onChangeFunc={(e) =>
                    handleInputChange(e, 'description', index)
                  }
                  error={errors.experiences?.[index]?.description}
                  touched={touchedFields.experiences?.[index]?.description}
                  hint={'მინიმუმ 2 სიმბოლო'}
                />
              </div>
              <div className='h-[1px] bg-underline'></div>
            </div>
          ))}

        <button
          type='button'
          className='mt-[45px] rounded-[4px] py-3 px-6 bg-btnAddMoreFields text-white font-500'
          onClick={() => handleAddField()}
        >
          მეტი გამოცდილების დამატება
        </button>
      </form>
      <NavigationButtonContainer page={page} />
    </>
  );
};

export default Experience;
