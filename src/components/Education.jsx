import NavigationButtonContainer from './NavigationButtonContainer';
import CustomInput from './CustomInput';
import PageTitle from './PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { updateEducation, addEducation } from '../features/EducationSlice';
import { getEducationFromLocalStorage } from '../utils/Localstorage';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Education = () => {
  const [degreeList, setDegreeList] = useState([]);
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const {
    control,
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
  useEffect(() => {
    const fetchDegreeList = async () => {
      try {
        const response = await axios.get(
          'https://resume.redberryinternship.ge/api/degrees'
        );
        const data = response.data;
        setDegreeList(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDegreeList();
  }, []);
  useEffect(() => {
    const storedEducations = getEducationFromLocalStorage();
    if (storedEducations && storedEducations.educations) {
      storedEducations.educations.forEach((education, index) => {
        Object.entries(education).forEach(([fieldName, value]) => {
          setValue(`educations[${index}].${fieldName}`, value, {
            shouldTouch: true,
          });
        });
      });
      handleTrigger();
    }
  }, [dispatch, setValue]);
  const handleTrigger = async () => {
    const isValidFields = await trigger();
  };

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
              <div className='mb-[30px] flex gap-x-[56px] items-start'>
                <CustomInput
                  labelText={'ხარისხი'}
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
