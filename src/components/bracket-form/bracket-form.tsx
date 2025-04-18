import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { setBracketForm } from '../../store';
import { BracketFormType } from '../../types';
import { BracketList } from '../ui-kit';
import { SYSTEMPAGE } from '../../constants';

export const BracketForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<BracketFormType>();

  const { control } = methods;

  const navigate = useNavigate();

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
        <button onClick={() => navigate(SYSTEMPAGE)}>НАЗАД</button>
      </FormProvider>
    </>
  );
};
