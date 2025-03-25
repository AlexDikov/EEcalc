import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { objectDataSelector, setObjectForm } from '../../store';
import { Inputs } from '../../types';
import { buildingTypeOptions, cities, wallTypeOptions } from '../../constants';
import { Input, Range, Select } from '../ui-kit';

export const ObjectForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      dispatch(setObjectForm(data));
    },
    [dispatch]
  );

  const objectForm = useSelector(objectDataSelector);

  const formData = objectForm?.formData;

  const dataCheck =
    typeof formData === 'object' ? Object.entries(formData).map(([key, value]) => ({ key, value })) : [];

  return (
    <>
      <FormProvider {...methods}>
        <form className="object-form" onSubmit={methods.handleSubmit(onSubmit)}>
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
      <ul>{dataCheck.length > 0 ? dataCheck.map((item) => <li key={item.key}>{item.value}</li>) : null}</ul>
    </>
  );
};
