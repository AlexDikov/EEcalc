import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { setObjectForm } from '../../store';
import { ObjectFormType } from '../../types';
import { Input, Range, Select } from '../ui-kit';
import { buildingTypeOptions, cities, wallTypeOptions } from '../../constants';

export const ObjectForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<ObjectFormType>();

  const onSubmit: SubmitHandler<ObjectFormType> = useCallback(
    (data) => {
      dispatch(setObjectForm(data));
    },
    [dispatch]
  );

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="objectName" placeholder="Название объекта" type="text" />
          <Input name="objectAddress" placeholder="Адрес объекта" type="text" />
          <Select name="city" placeholder="Город строительства" options={cities} />
          <Select name="buildingType" placeholder="Назначение здания" options={buildingTypeOptions} />
          <Select name="wallType" placeholder="Тип конструкции" options={wallTypeOptions} />
          <Range name="innerTemp" />
          <Range name="innerHumidity" />
          <Input name="mr" type="number" />
          <button>ОТПРАВИТЬ</button>
        </form>
      </FormProvider>
    </>
  );
};
