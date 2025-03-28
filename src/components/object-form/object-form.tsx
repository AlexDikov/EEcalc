import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { setObjectForm } from '../../store';
import { ObjectFormType } from '../../types';
import { Checkbox, Input, Range, Select } from '../ui-kit';
import { buildingTypeOptions, cities, WALLPAGE, wallTypeOptions } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';

export const ObjectForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<ObjectFormType>({ mode: 'onBlur' });
  const {
    control,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<ObjectFormType> = useCallback(
    (data) => {
      console.log(data);
      dispatch(setObjectForm(data));
    },
    [dispatch]
  );

  const watchConcreteWall = useWatch({ control, name: 'wallType' });

  const navigate = useNavigate();

  const forwardPage = () => {
    {
      if (isValid) navigate(WALLPAGE);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Input
            name="objectName"
            placeholder="Название объекта"
            type="text"
            minLength={5}
            maxLength={100}
            isRequired={true}
          />
          <Input
            name="objectAddress"
            placeholder="Адрес объекта"
            type="text"
            minLength={5}
            maxLength={100}
            isRequired={true}
          />
          <Select name="city" placeholder="Город строительства" options={cities} />
          <Select name="buildingType" placeholder="Назначение здания" options={buildingTypeOptions} />
          <Select name="wallType" placeholder="Тип конструкции" options={wallTypeOptions} />
          {watchConcreteWall === 'frame' ? <Checkbox name="hasConcreteWall" label="Стены из монолита" /> : null}
          <Range name="innerTemp" minValue={16} maxValue={26} defaultValue={20} />
          <Range name="innerHumidity" minValue={30} maxValue={100} defaultValue={40} />
          <Input name="mr" placeholder="1" type="number" min={0.63} max={1} isRequired={true} />
          <button onSubmit={forwardPage}>ОТПРАВИТЬ</button>
        </form>
        <DevTool control={control} />
      </FormProvider>
    </>
  );
};
