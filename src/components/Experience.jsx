import NavigationButtonContainer from './NavigationButtonContainer';
import PageTitle from './PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useFormContext, useFieldArray } from 'react-hook-form';
import CustomInput from './CustomInput';
import { updateExperience, addExperience } from '../features/ExperienceSlice';

const Experience = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useFormContext();
  const { fields, append } = useFieldArray({
    name: 'experience',
    control,
  });
  console.log('values', getValues());
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleInputChange = (e, name, index) => {
    const value = e.target.value;
    dispatch(updateExperience({ index, fieldName: name, value }));
  };

  const handleAddField = () => {
    dispatch(addExperience());
    append({ job: '', employer: '' });
  };

  return (
    <>
      <PageTitle title={'გამოცდილება'} pageNum={page} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields &&
          fields.map((field, index) => (
            <div key={field.id}>
              <CustomInput
                labelText={'job'}
                name={`experience[${index}].job`}
                type={'text'}
                placeholder={'job'}
                minLength={2}
                regex={/^[ა-ჰ]+$/}
                onChangeFunc={(e) => handleInputChange(e, 'job', index)}
                error={errors.experience?.[index]?.job}
              />
              <CustomInput
                labelText={'employer'}
                name={`experience[${index}].employer`}
                type={'text'}
                placeholder={'employer'}
                minLength={2}
                onChangeFunc={(e) => handleInputChange(e, 'employer', index)}
              />
            </div>
          ))}

        <button type='button' onClick={() => handleAddField()}>
          Add Field
        </button>
      </form>
      <NavigationButtonContainer page={page} />
    </>
  );
};

export default Experience;
