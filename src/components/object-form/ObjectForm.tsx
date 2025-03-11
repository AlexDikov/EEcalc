import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { objectDataSelector, setObjectForm } from '../../store';
import { Inputs } from '../../types';
import './objectForm.css';
import { cities } from '../../constants';

export const ObjectForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      dispatch(setObjectForm(data));
    },
    [dispatch]
  );

  const objectForm = useSelector(objectDataSelector);
  const formData = objectForm?.formData;

  const cityList = cities.map((item) => (
    <option key={item.value} value={item.value}>
      {item.name}
    </option>
  ));

  return (
    <>
      <form className="object-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('objectName')} placeholder="Название объекта" />
        <input {...register('objectAddress')} placeholder="Адрес объекта" />
        <select {...register('city')} id="city" required>
          <option>Город строительства</option>
          {cityList}
        </select>
        <select {...register('buildingType')} id="building-type" required>
          <option>Назначение здания</option>
          <option value={1}>Лечебное, детское</option>
          <option value={2}>Жилое, гостиница</option>
          <option value={3}>Общественное, административное</option>
          <option value={4}>Производственное </option>
        </select>
        <select {...register('wallType', { required: true })} id="wall-type" required>
          <option>Тип конструкции</option>
          <option value={1}>Монолитная</option>
          <option value={2}>Монолитно-каркасная</option>
          <option value={3}>Беcкаркасная</option>
        </select>
        {/* {buildingType === 2 ? (
            <input
              className="obj-data__check"
              onClick={toggleConcreteWall}
              checked={concreteWall}
              label="Есть стены из железобетона"
            />
          ) : null} */}

        <input
          {...register('innerTemp')}
          className="mb-3"
          defaultValue="20"
          min="5"
          max="26"
          step="1"
          id="inner-temp"
        />
        <input {...register('innerHumidity')} defaultValue="50" min="35" max="100" step="5" id="inner-humidity" />
        <input {...register('mr')} id="mr" className="w-50" min={0.63} max={1} />

        {/* {cityProp.s ? (
            <div>{cityProp.s}</div>
          ) : (
            <div className="d-flex">
              <input
                className=" ms-2"
                id="humidity-a"
                label="А"
                checked={humidityZone}
                onChange={() => handleHumidityZone(true)}
              ></input>
              <input
                className=" ms-2"
                id="humidity-b"
                label="Б"
                checked={!humidityZone}
                onChange={() => handleHumidityZone(false)}
              ></input>
            </div>
          )} */}
        <button>ОТПРАВИТЬ</button>
      </form>
      <ul>
        <li>{formData?.objectName}</li>
        <li>{formData?.objectAddress}</li>
        <li>{formData?.buildingType}</li>
        <li>{formData?.wallType}</li>
        <li>{formData?.city}</li>
        <li>{formData?.innerTemp}</li>
        <li>{formData?.innerHumidity}</li>
        <li>{formData?.mr}</li>
      </ul>
    </>
  );
};
