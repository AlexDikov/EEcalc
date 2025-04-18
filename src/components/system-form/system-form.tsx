import { useDispatch, useSelector } from 'react-redux';
import { objectDataSelector, setSystemForm } from '../../store';
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

  const methods = useForm<SystemFormType>({
    mode: 'onBlur',
    defaultValues: { windowPosition: 'flat', insulationPosition: 'zero' },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SystemFormType> = useCallback(
    (data) => {
      return dispatch(setSystemForm(data)), navigate(BRACKETPAGE);
    },
    [dispatch, navigate]
  );

  const objectData = useSelector(objectDataSelector);

  const hasConcreteWall = objectData.formData?.hasConcreteWall;

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="wallArea" type="number" placeholder="м²" />
          {hasConcreteWall && <Input name="concreteWallArea" type="number" placeholder="м²" />}
          <Input name="concreteWindowLength" type="number" placeholder="м" />
          {hasConcreteWall && <Input name="concreteWindowLength" type="number" placeholder="м" />}
          <Input name="anchorQuantity" type="number" placeholder="шт/м²" />
          {hasConcreteWall && <Input name="concreteAnchorQuantity" type="number" placeholder="шт/м²" />}
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
