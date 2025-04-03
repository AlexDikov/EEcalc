import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setBracketForm } from '../../store';
import { FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { BracketFormType } from '../../types';
import { DevTool } from '@hookform/devtools';
import { BracketList } from '../ui-kit';

export const BracketForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<BracketFormType>();

  const { control } = methods;

  const { fields, append, remove } = useFieldArray({
    name: 'bracket',
    control,
  });

  console.log('fields', fields);
  

  const onSubmit: SubmitHandler<BracketFormType> = useCallback(
    (data) => {
      console.log(data);
      dispatch(setBracketForm(data));
    },
    [dispatch]
  );

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <BracketList fields={fields} remove={remove} />
          <button
            type="button"
            onClick={() =>
              append({ bracketMaterial: '', bracketType: '', bracketName: '', bracketQuantity: 0 })
            }
          >
            Добавить
          </button>
          <button>ОТПРАВИТЬ</button>
        </form>
        <DevTool control={control} />
      </FormProvider>
    </>
  );
};
