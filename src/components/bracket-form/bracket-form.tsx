import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setBracketForm } from '../../store';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BracketFormType } from '../../types';
import { Input, Select, Radio } from '../ui-kit';
import { bracketMaterialOptions, bracketNameOptions, bracketTypeOptions } from '../../constants';

export const BracketForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<BracketFormType>();

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
          {bracketMaterialOptions.map((item) => (
            <Radio name="bracketMaterial" value={item.value} label={item.label} key={item.value} />
          ))}
          {bracketTypeOptions.map((item) => (
            <Radio name="bracketType" value={item.value} label={item.label} key={item.value} />
          ))}
          <Select name="bracketName" placeholder="Тип кронштейна" options={bracketNameOptions} />
          <Input name="bracketQuantity" placeholder="Шт" type="number" />
          <button>ОТПРАВИТЬ</button>
        </form>
      </FormProvider>
    </>
  );
};
