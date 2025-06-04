import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { objectDataSelector, setObjectForm } from '../../store';
import { ObjectFormType } from '../../types';
import { Checkbox, Input, Range, Select } from '../ui-kit';
import { buildingTypeOptions, cities, WALLPAGE, wallTypeOptions } from '../../constants';
import { resetWallForm } from '../../store/';
import { resetSystemForm } from '../../store/';
import { resetBracketForm } from '../../store/';

export const ObjectForm = () => {
  const dispatch = useDispatch();

  const formData = useSelector(objectDataSelector);

  const methods = useForm<ObjectFormType>({
    mode: 'onBlur',
    defaultValues: formData,
  });

  const { resetField } = methods;

  const { control } = methods;

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ObjectFormType> = useCallback(
    (data) => {
      dispatch(setObjectForm(data));
      if (data !== formData) {
        dispatch(resetWallForm());
        dispatch(resetSystemForm());
        dispatch(resetBracketForm());
      }
      navigate(WALLPAGE);
    },
    [dispatch, navigate]
  );

  const wallTypeField = useWatch({ control, name: 'wallType' });

  useEffect(() => {
    if (wallTypeField !== 'frame') {
      resetField('hasConcreteWall', { defaultValue: false });
    }
  }, [wallTypeField]);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Input name="objectName" placeholder="Название объекта" type="text" minLength={5} maxLength={100} />
          <Input name="objectAddress" placeholder="Адрес объекта" type="text" minLength={5} maxLength={100} />
          <Select name="cityValue" placeholder="Город строительства" options={cities} errorMessage="Выберете город" />
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
          <Input name="mr" placeholder="1" type="number" min={0.63} max={1} />
          <button>ОТПРАВИТЬ</button>
        </form>
        <button onClick={() => navigate(WALLPAGE)}>ВПЕРЕД</button>
      </FormProvider>
    </>
  );
};
