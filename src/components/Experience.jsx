import NavigationButtonContainer from './NavigationButtonContainer';
import PageTitle from './PageTitle';
import { useSelector } from 'react-redux';
import { useFormContext, useFieldArray } from 'react-hook-form';
import CustomInput from './CustomInput';

const Experience = () => {
  const { page } = useSelector((state) => state.page);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append } = useFieldArray({
    name: 'experience',
    control,
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageTitle title={'გამოცდილება'} pageNum={page} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <CustomInput
              labelText={'job'}
              name={`experience[${index}].job`}
              type={'text'}
              placeholder={'job'}
              minLength={2}
              regex={/^[ა-ჰ]+$/}
            />
            <CustomInput
              labelText={'employer'}
              name={`experience[${index}].employer`}
              type={'text'}
              placeholder={'employer'}
              minLength={2}
              regex={/^[ა-ჰ]+$/}
            />
          </div>
        ))}

        <button type='button' onClick={() => append({ name: '', email: '' })}>
          Add Field
        </button>
      </form>
      <NavigationButtonContainer page={page} />
    </>
  );
};

export default Experience;
