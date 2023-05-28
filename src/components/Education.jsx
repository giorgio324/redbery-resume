import NavigationButtonContainer from './NavigationButtonContainer';
import CustomInput from './CustomInput';
import PageTitle from './PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { updateEducation, addEducation } from '../features/EducationSlice';
const Education = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const {
    control,
    getValues,
    formState: { errors, touchedFields },
    trigger,
    setValue,
  } = useFormContext();
  const { fields, append } = useFieldArray({
    name: 'educations',
    control,
  });
  const handleInputChange = (e, name, index) => {
    const value = e.target.value;
    dispatch(updateEducation({ index, fieldName: name, value }));
  };

  const handleAddField = () => {
    dispatch(addEducation());
    append({
      institute: '',
      degree: '',
      due_date: '',
      description: '',
    });
  };
  const handleTrigger = async () => {
    const isValidFields = await trigger();
  };
  console.log('values education', getValues());
  console.log('errors education', errors);
  console.log('touchedFields education', touchedFields);
  return (
    <>
      <PageTitle title={'განათლება'} pageNum={page}></PageTitle>
      <form>
        {fields &&
          fields.map((field, index) => (
            <div key={field.id}>
              <div className='mb-[30px] mt-[75px]'>
                <CustomInput
                  labelText={'სასწავლებელი'}
                  name={`educations[${index}].institute`}
                  type={'text'}
                  placeholder={'სასწავლებელი'}
                  minLength={2}
                  onChangeFunc={(e) => handleInputChange(e, 'institute', index)}
                  error={errors.educations?.[index]?.institute}
                  touched={touchedFields.educations?.[index]?.institute}
                  hint={'მინიმუმ 2 სიმბოლო'}
                />
              </div>
              <div className='mb-[30px] flex gap-x-[56px] items-center'>
                <CustomInput
                  labelText={'სწავლების დონე'}
                  name={`educations[${index}].degree`}
                  isSelect={true}
                  onChangeFunc={(e) => handleInputChange(e, 'degree', index)}
                  error={errors.educations?.[index]?.degree}
                  touched={touchedFields.educations?.[index]?.degree}
                />

                <CustomInput
                  labelText={'დამთავრების რიცხვი'}
                  name={`educations[${index}].due_date`}
                  type={'date'}
                  onChangeFunc={(e) => handleInputChange(e, 'due_date', index)}
                  error={errors.educations?.[index]?.due_date}
                  touched={touchedFields.educations?.[index]?.due_date}
                  hint={'მინიმუმ 2 სიმბოლო'}
                />
              </div>
              <div className='mb-[58px]'>
                <CustomInput
                  isTextArea
                  isTextAreaRequired={true}
                  labelText={'აღწერა'}
                  name={`educations[${index}].description`}
                  type={'text'}
                  placeholder={'განათლების აღწერა'}
                  minLength={2}
                  onChangeFunc={(e) =>
                    handleInputChange(e, 'description', index)
                  }
                  error={errors.educations?.[index]?.description}
                  touched={touchedFields.educations?.[index]?.description}
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
export default Education;
