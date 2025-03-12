import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { objectDataSelector, setObjectForm } from '../../store';
import { Inputs } from '../../types';
import { buildingTypeOptions, cities, wallTypeOptions } from '../../constants';
import { Input } from '../inputs/Input';
import { Select } from '../inputs/Select';
import { optionList } from '../../utils';

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

  const dataCheck = formData && Object.entries(formData).map(([key, value]) => <li key={key}>{value}</li>);

  return (
    <>
      <FormProvider {...methods}>
        <form className="object-form" onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="objectName" placeholder="Название объекта" type="text" />
          <Input name="objectAddress" placeholder="Адрес объекта" type="text" />
          <Select name="city" placeholder="Город строительства" options={optionList(cities)} />
          <Select name="buildingType" placeholder="Назначение здания" options={optionList(buildingTypeOptions)} />
          <Select name="wallType" placeholder="Тип конструкции" options={optionList(wallTypeOptions)} />
          <Input name="innerTemp" type="range" />
          <Input name="innerHumidity" type="range" />
          <Input name="mr" type="number" />
          <button>ОТПРАВИТЬ</button>
        </form>
      </FormProvider>
      <ul>{dataCheck}</ul>
    </>
  );
};
