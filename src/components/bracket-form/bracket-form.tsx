import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { bracketDataSelector, objectDataSelector, setBracketForm, wallDataSelector } from '../../store';
import { BracketFormType } from '../../types';
import { BracketList } from '../ui-kit';
import { SYSTEMPAGE } from '../../constants';
import { REPORTPAGE } from '../../constants/routes';
import { bracketInterpolation } from '../../utils';

export const BracketForm = () => {
  const dispatch = useDispatch();

  const objectData = useSelector(objectDataSelector);
  const wallData = useSelector(wallDataSelector)!;
  const formData = useSelector(bracketDataSelector);

  const { wallType } = objectData!;

  const methods = useForm<BracketFormType>({ defaultValues: { bracket: formData?.bracket } });

  const { control } = methods;

  const navigate = useNavigate();

  const { fields, append, remove } = useFieldArray({
    name: 'bracket',
    control,
  });

  useEffect(() => {
    if (formData === undefined) {
      append({
        bracketMaterial: 'aluminium',
        bracketType: 'light',
        bracketName: '',
        bracketQuantity: 0,
        bracketBase: '',
        bracketConduction: 0,
      });
    }
  }, []);

  const onSubmit: SubmitHandler<BracketFormType> = useCallback(
    (data) => {
      const updatedData = bracketInterpolation(wallType, wallData, data);
      dispatch(setBracketForm(updatedData));
      navigate(REPORTPAGE);
    },
    [dispatch]
  );

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <BracketList fields={fields} remove={remove} />
          <button
            type="button"
            onClick={() =>
              append({
                bracketMaterial: 'aluminium',
                bracketType: 'light',
                bracketName: '',
                bracketQuantity: 0,
                bracketBase: '',
                bracketConduction: 0,
              })
            }
          >
            Добавить
          </button>
          <button>ОТПРАВИТЬ</button>
        </form>
        <button onClick={() => navigate(SYSTEMPAGE)}>НАЗАД</button>
      </FormProvider>
    </>
  );
};
