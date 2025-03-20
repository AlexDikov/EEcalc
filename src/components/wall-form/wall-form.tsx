import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setWallForm } from '../../store';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { WallFormType } from '../../types';
import { Input } from '../ui-kit';

export const WallForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<WallFormType>();

  const onSubmit: SubmitHandler<WallFormType> = useCallback(
    (data) => {
      dispatch(setWallForm(data));
    },
    [dispatch]
  );

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <section>
            <Input name="concreteThickness" placeholder="мм" type="number" />
            <Input name="concreteHeatConduction" placeholder="Вт/м²" type="number" />
          </section>
          <section>
            <Input name="insulationName" placeholder="Название" type="text" />
            <Input name="insulationThickness" placeholder="мм" type="number" />
            <Input name="insulationHeatConduction" placeholder="Вт/м²" type="number" />
          </section>
          <button>ОТПРАВИТЬ</button>
        </form>
      </FormProvider>
    </>
  );
};
