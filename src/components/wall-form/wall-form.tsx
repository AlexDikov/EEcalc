import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { objectDataSelector, setWallForm } from '../../store';
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { WallFormType } from '../../types';
import { WallItemForm } from '../ui-kit';
import {
  blockDensityOptions,
  blockOptions,
  insulationDensityOptions,
  insulationOptions,
  SYSTEMPAGE,
} from '../../constants';
import { Checkbox } from '../ui-kit';

export const WallForm = () => {
  const dispatch = useDispatch();

  const methods = useForm<WallFormType>({ mode: 'onBlur' });

  const { control } = methods;

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<WallFormType> = useCallback(
    (data) => {
      console.log(data);
      dispatch(setWallForm(data));
      navigate(SYSTEMPAGE);
    },
    [dispatch, navigate]
  );

  const objectData = useSelector(objectDataSelector);

  const wallType = objectData.formData?.wallType;

  console.log(wallType);

  const hasSecondInsulation = useWatch({ control, name: 'hasSecondInsulation' });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {wallType !== 'brick' && <WallItemForm title="Железобетон" material="concrete" />}
          {wallType !== 'monolith' && (
            <WallItemForm
              title="Кладка"
              material="block"
              nameOptions={blockOptions}
              densityOptions={blockDensityOptions}
            />
          )}
          <WallItemForm
            title="Утеплитель"
            subtitle="внутренний слой"
            material="insulation"
            nameOptions={insulationOptions}
            densityOptions={insulationDensityOptions}
          />
          {hasSecondInsulation && (
            <WallItemForm
              title="Утеплитель"
              subtitle="внешний слой"
              material="secondInsulation"
              nameOptions={insulationOptions}
              densityOptions={insulationDensityOptions}
            />
          )}
          <Checkbox name="hasSecondInsulation" label="Добавить второй слой" />
          <button>ОТПРАВИТЬ</button>
        </form>
      </FormProvider>
    </>
  );
};
