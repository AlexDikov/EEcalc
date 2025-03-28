import { useDispatch } from 'react-redux';
import { setSystemForm } from '../../store';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { SystemFormType } from '../../types';
import { Input, Select } from '../ui-kit';
import { anchorDepthOptions, insulationPositionOptions, windowPositionOptions } from '../../constants';
import { RadioGroup } from '../ui-kit/radio-group/RadioGroup';

export const SystemForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<SystemFormType>();

  const onSubmit: SubmitHandler<SystemFormType> = useCallback((data) => dispatch(setSystemForm(data)), [dispatch]);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="wallArea" type="number" placeholder="м²" />
          <Input name="windowLength" type="number" placeholder="м" />
          <Input name="anchorQuantity" type="number" placeholder="шт/м²" />
          <Select name="anchorDepth" placeholder="мм" options={anchorDepthOptions} />
          <RadioGroup options={windowPositionOptions} name="windowPosition" />
          <RadioGroup options={insulationPositionOptions} name="insulationPosition" />
          <button>ОТПРАВИТЬ</button>
        </form>
      </FormProvider>
    </>
  );
};
