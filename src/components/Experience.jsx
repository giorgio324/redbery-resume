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
            <input
              {...register(`experience[${index}].name`, { required: true })}
              defaultValue={field.name} // If you want to pre-populate with existing data
            />
            {errors.experience?.[index]?.name && <p>This field is required</p>}

            <input
              {...register(`experience[${index}].email`, {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              defaultValue={field.email} // If you want to pre-populate with existing data
            />
            {errors.experience?.[index]?.email && <p>Invalid email address</p>}
          </div>
        ))}
        {fields.length === 0 && ( // Show default fields only if there are no additional fields
          <div>
            <input
              {...register('experience[0].name', { required: true })}
              defaultValue='' // Provide the default value here if needed
            />
            {errors.experience?.[0]?.name && <p>This field is required</p>}

            <input
              {...register('experience[0].email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              defaultValue='' // Provide the default value here if needed
            />
            {errors.experience?.[0]?.email && <p>Invalid email address</p>}
          </div>
        )}
        <button type='button' onClick={() => append({ name: '', email: '' })}>
          Add Field
        </button>
      </form>
      <NavigationButtonContainer page={page} />
    </>
  );
};

export default Experience;
