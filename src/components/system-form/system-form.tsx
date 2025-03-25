import { useDispatch } from 'react-redux';
import { setSystemForm } from '../../store';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { SystemFormType } from '../../types';
import { Input, Select, Radio } from '../ui-kit';
import { anchorDepthOptions, insulationPositionOptions, windowPositionOptions } from '../../constants';

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
          {windowPositionOptions.map((item) => (
            <Radio name="windowPosition" value={item.value} label={item.label} key={item.value} />
          ))}
          {insulationPositionOptions.map((item) => (
            <Radio name="insulationPosition" value={item.value} label={item.label} key={item.value} />
          ))}
          <button>ОТПРАВИТЬ</button>
        </form>
      </FormProvider>
    </>
  );
};
