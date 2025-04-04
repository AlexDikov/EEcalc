import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { setBracketForm } from '../../store';
import { BracketFormType } from '../../types';
import { BracketList } from '../ui-kit';
import { DevTool } from '@hookform/devtools';

export const BracketForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<BracketFormType>();

  const { control } = methods;

  const { fields, append, remove } = useFieldArray({
    name: 'bracket',
    control,
  });

  const onSubmit: SubmitHandler<BracketFormType> = useCallback(
    (data) => {
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
              append({ bracketMaterial: 'aluminium', bracketType: 'light', bracketName: '', bracketQuantity: null })
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
