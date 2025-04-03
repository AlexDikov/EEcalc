import { useDispatch, useSelector } from 'react-redux';
import { objectDataSelector, setSystemForm } from '../../store';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { SystemFormType } from '../../types';
import { Input, Select, RadioGroup } from '../ui-kit';
import { anchorDepthOptions, insulationPositionOptions, windowPositionOptions } from '../../constants';

export const SystemForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<SystemFormType>({
    mode: 'onBlur',
    defaultValues: { windowPosition: 'flat', insulationPosition: 'zero' },
  });

  const onSubmit: SubmitHandler<SystemFormType> = useCallback((data) => dispatch(setSystemForm(data)), [dispatch]);

  const objectData = useSelector(objectDataSelector);

  const hasConcreteWall = objectData.formData?.hasConcreteWall;

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="wallArea" type="number" placeholder="м²" isRequired={true} />
          {hasConcreteWall && <Input name="concreteWallArea" type="number" placeholder="м²" isRequired={true} />}
          <Input name="concreteWindowLength" type="number" placeholder="м" isRequired={true} />
          {hasConcreteWall && <Input name="concreteWindowLength" type="number" placeholder="м" isRequired={true} />}
          <Input name="anchorQuantity" type="number" placeholder="шт/м²" isRequired={true} />
          {hasConcreteWall && (
            <Input name="concreteAnchorQuantity" type="number" placeholder="шт/м²" isRequired={true} />
          )}
          <Select name="anchorDepth" placeholder="мм" options={anchorDepthOptions} errorMessage="Выберете глубину" />
          <RadioGroup options={windowPositionOptions} name="windowPosition" />
          <RadioGroup options={insulationPositionOptions} name="insulationPosition" />
          <button>ОТПРАВИТЬ</button>
        </form>
      </FormProvider>
    </>
  );
};
