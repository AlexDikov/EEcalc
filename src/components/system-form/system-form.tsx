import { useDispatch, useSelector } from 'react-redux';
import { objectDataSelector, setSystemForm, systemDataSelector } from '../../store';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SystemFormType } from '../../types';
import { Input, Select, RadioGroup } from '../ui-kit';
import {
  anchorDepthOptions,
  BRACKETPAGE,
  insulationPositionOptions,
  WALLPAGE,
  windowPositionOptions,
} from '../../constants';

export const SystemForm = () => {
  const dispatch = useDispatch();

  const formData = useSelector(systemDataSelector);

  const methods = useForm<SystemFormType>({
    mode: 'onBlur',
    defaultValues: formData,
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SystemFormType> = useCallback(
    (data) => {
      return dispatch(setSystemForm(data)), navigate(BRACKETPAGE);
    },
    [dispatch, navigate]
  );

  const objectData = useSelector(objectDataSelector);

  const { hasConcreteWall, wallType } = objectData!;

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {hasConcreteWall || wallType === 'monolith' ? (
            <>
              <Input name="concreteWallArea" type="number" placeholder="м²" />
              <Input name="concreteWindowLength" type="number" placeholder="м" />
              <Input name="concreteAnchorQuantity" type="number" placeholder="шт/м²" />
            </>
          ) : (
            <>
              <Input name="wallArea" type="number" placeholder="м²" />
              <Input name="windowLength" type="number" placeholder="м" />
              <Input name="anchorQuantity" type="number" placeholder="шт/м²" />
            </>
          )}
          <Select name="anchorDepth" placeholder="мм" options={anchorDepthOptions} errorMessage="Выберете глубину" />
          <RadioGroup options={windowPositionOptions} name="windowPosition" />
          <RadioGroup options={insulationPositionOptions} name="insulationPosition" />
          <button>ОТПРАВИТЬ</button>
        </form>
        <button onClick={() => navigate(WALLPAGE)}>НАЗАД</button>
        <button onClick={() => navigate(BRACKETPAGE)}>ВПЕРЕД</button>
      </FormProvider>
    </>
  );
};
