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
  const { control } = methods;

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ObjectFormType> = useCallback(
    (data) => {
      dispatch(setObjectForm(data));
      navigate(WALLPAGE);
    },
    [dispatch, navigate]
  );

  const wallTypeField = useWatch({ control, name: 'wallType' });

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
          <Select name="city" placeholder="Город строительства" options={cities} errorMessage="Выберете город" />
          <Select
            name="buildingType"
            placeholder="Назначение здания"
            options={buildingTypeOptions}
            errorMessage="Выберете назначение"
          />
          <Select name="wallType" placeholder="Тип конструкции" options={wallTypeOptions} errorMessage="Выберете тип" />
          {wallTypeField === 'frame' ? <Checkbox name="hasConcreteWall" label="Стены из монолита" /> : null}
          <Range name="innerTemp" minValue={16} maxValue={26} defaultValue={20} />
          <Range name="innerHumidity" minValue={30} maxValue={100} defaultValue={40} />
          <Input name="mr" placeholder="1" type="number" min={0.63} max={1} isRequired={true} />
          <button>ОТПРАВИТЬ</button>
        </form>
        <DevTool control={control} />
      </FormProvider>
    </>
  );
};
