import { useEffect, useLayoutEffect } from 'react';
import NavigationButtonContainer from './NavigationButtonContainer';
import PageTitle from './PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useFormContext, useFieldArray } from 'react-hook-form';
import CustomInput from './CustomInput';
import { updateExperience, addExperience } from '../features/ExperienceSlice';

const Experience = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const experience = useSelector((state) => state.experience.experience);

  const { handleSubmit, control } = useFormContext();
  const { fields, append } = useFieldArray({
    name: 'experience',
    control,
  });
  console.log(fields);
  const onSubmit = (data) => {
    console.log(data);
  };

  const firstField = {
    employer: '',
    id: '6e5c838a-41fb-48e4-92cf-1d9293bf8a1d',
    job: '',
  };

  fields.length === 0 && fields.unshift(firstField);

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
