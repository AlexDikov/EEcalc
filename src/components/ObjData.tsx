import Form from 'react-bootstrap/Form';
import Tooltip from 'react-bootstrap/Tooltip';
import { useSelector, useDispatch } from 'react-redux';
import { Button, OverlayTrigger, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import concrete from '../images/concrete.jpg';
import block from '../images/block.jpg';
import brick from '../images/brick.jpg';
import map from '../images/map.jpeg';
import bc from '../images/bc.jpeg';
import manufacture from '../images/manufacture.jpeg';
import hospital from '../images/hospital.jpeg';
import { cities } from '../constants/cities';
import { setCity } from '../features/citySlice';
import { RootState } from '../app/types';
import { setBuildingAim } from '../features/buildingAimSlice';
import { setBuildingType } from '../features/buildingTypeSlice';
import { setObjAddress } from '../features/objAddressSlice';
import { setObjName } from '../features/objNameSlice';
import { toggleConcreteWall } from '../features/concreteWall';
import { setInnerTemp } from '../features/innerTempSlice';
import { setHumidity } from '../features/humiditySlice';
import { toggleVaporCalc } from '../features/vaporCalcSlice';
import { setMr } from '../features/mrSlice';
import { setHumidityZone } from '../features/humidityZoneSlice';

export default function ObjData() {

  const dispatch = useDispatch()

  type Inputs = {
    city: string,
    objAddress: string,
    objName: string,
    buildingAim: string,
    buildingType: string,
    concreteWall: boolean,
    innerTemp: number,
    humidity: number,
    mr: number
    vaporCalc: boolean
  }

  const {register, handleSubmit, formState: { isValid }} = useForm<Inputs>()

  const navigate = useNavigate();
 
  const buildingAim = useSelector((state:RootState) => state.buildingAim)
  const buildingType = useSelector((state:RootState) => state.buildingType)
  const city = useSelector((state:RootState) => state.city)
  const concreteWall = useSelector((state:RootState) => state.concreteWall)
  const humidity = useSelector((state:RootState) => state.humidity)
  const humidityZone = useSelector((state:RootState) => state.humidityZone)
  const innerTemp = useSelector((state:RootState) => state.innerTemp)
  const mr = useSelector((state:RootState) => state.mr)
  const objAddress = useSelector((state:RootState) => state.objAddress)
  const objName = useSelector((state:RootState) => state.objName)
  const vaporCalc = useSelector((state:RootState) => state.vaporCalc)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    navigate('/walldata')}

  const cityList = cities.map((city, i) => {
    return (
      <option key={i} value={city.name}>
        {city.name}
      </option>
    );
  });

  const handleCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityName = e.target.value;
    const selectedCity = cities.find((city) => city.name === selectedCityName);
    if (selectedCity) {
      dispatch(setCity(selectedCity));
    }
  };

  const handleBuildingAim = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBuildingAim(parseInt(e.target.value)));
  };

  const handleBuildingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBuildingType(parseInt(e.target.value)));
  };

  const handleHumidity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHumidity(parseInt(e.target.value)));
  }  

  const handleInnerTemp = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInnerTemp(parseInt(e.target.value)));
  }  

  const handleMr = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMr(parseFloat(e.target.value)));
  }  

  const handleObjAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setObjAddress(e.target.value));
  };

  const handleObjName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setObjName(e.target.value));
  };

  const buildingPhoto = () => {
    if (buildingAim === 1) return hospital;
    if (buildingAim === 2) return bc;
    if (buildingAim === 3) return manufacture;
  };

  const wallPhoto = () => {
    if (buildingType === 1) return concrete;
    if (buildingType === 2) return block;
    if (buildingType === 3) return brick;
  };

  return (
        <form className="obj-page" onSubmit={handleSubmit(onSubmit)}>
          <ProgressBar variant="secondary" now={20} label={`${20}%`} />
          <div className="d-flex justify-content-between mt-3 mb-3">
            <div className="obj-adress">
              <Form.Control 
                {...register('objName')}
                placeholder="Название объекта" 
                value={objName}
                onChange={handleObjName} 
              />
              <Form.Control
                {...register('objAddress')}
                className="ms-2"
                placeholder="Адрес объекта"
                value={objAddress}
                onChange={handleObjAddress}
              />
            </div>
            <Button
              type="submit"
              className="mt-1"
              variant="outline-secondary"
              size="sm"
              disabled={!isValid}
            >
              Далее
            </Button>
          </div>
          <div className="obj-data">
            <div className="obj-container">
              <div className="obj-img">
                <img className="obj-map" src={map} alt="map" />
              </div>
              <Form.Select 
                {...register('city')}
                className="mt-3" 
                id="city" 
                value={city.name} 
                required 
                onChange={handleCity}
              >
                <option value='' disabled>Город строительства</option>
                {cityList}
              </Form.Select>
            </div>
            <div className="obj-container">
              <div className="obj-img">
                <img className="obj-map" 
                src={buildingAim ? buildingPhoto() : bc}
                 alt="map" />
              </div>
              <Form.Select 
                {...register('buildingAim')}
                className="mt-3" 
                id="building-aim" 
                value={buildingAim} 
                required 
                onChange={handleBuildingAim}
              >
                <option>Назначение здания</option>
                <option value={1}>Лечебное, детское</option>
                <option value={2}>Жилое, гостиница</option>
                <option value={3}>Общественное, административное</option>
                <option value={4}>Производственное </option>
              </Form.Select>
            </div>
            <div className="obj-container">
              <div className="obj-img">
                <img className="obj-map" 
                src={buildingType ? wallPhoto() : concrete} 
                alt="map" />
              </div>
              <Form.Select
                {...register('buildingType')}
                className="mt-3 mb-3 position-relative"
                id="building-type"
                value={buildingType}
                required
                onChange={handleBuildingType}
              >
                <option>Тип конструкции</option>
                <option value={1}>Монолитная</option>
                <option value={2}>Монолитно-каркасная</option>
                <option value={3}>Беcкаркасная</option>
              </Form.Select>
              {buildingType === 2 ? (
                <Form.Check
                  {...register('concreteWall')}
                  className="obj-data__check"
                  onClick={() => dispatch(toggleConcreteWall())}
                  checked={concreteWall}
                  label="Есть стены из железобетона"
                />
              ) : null}
            </div>
          </div>
          <div className="d-flex flex-row mt-3 justify-content-between">
            <div className="obj-param ">
              <Form.Label className=" position-relative">
                Температура внутреннего воздуха : 
                {' '}{innerTemp}
                <sup>o</sup>C{' '}
                <OverlayTrigger
                  overlay={
                    <Tooltip id="temp-tooltip">Допустимая температура в помещениях согласно СП 50.13330.2012</Tooltip>
                  }
                >
                  <button className="i-btn position-absolute"></button>
                </OverlayTrigger>
              </Form.Label>
              <Form.Range
                {...register('innerTemp')}
                className="mb-3"
                defaultValue="20"
                min="5"
                max="26"
                step="1"
                onChange={handleInnerTemp}
                id="temp-in"
              />
              <Form.Label className=" position-relative">
                Влажность внутреннего воздуха : 
                {' '}{humidity} %
                <OverlayTrigger
                  overlay={
                    <Tooltip id="humid-tooltip">
                      Для жилых зданий, лечебных учреждений, домов для престарелых и инвалидов, школ и детских домов –
                      55 %; <br />
                      для кухонь – 60 %; <br />
                      для ванных комнат – 65 %; <br />
                      для теплых подвалов и подполий с коммуникациями – 75 %; <br />
                      для теплых чердаков жилых зданий – 55 %; <br />
                      для других помещений общественных зданий – 50 %.
                    </Tooltip>
                  }
                >
                  <button className="i-btn position-absolute"></button>
                </OverlayTrigger>
              </Form.Label>
              <Form.Range 
                {...register('humidity')}
                defaultValue="50" 
                min="35"
                max="100" 
                step="5"
                onChange={handleHumidity}
                id="humid-in" />
            </div>
            <div className="obj-param position-relative">
              <Form.Check
                {...register('vaporCalc')}
                className=" ms-2 position-relative"
                id="mtel-cover"
                label="Учитывать расчет влаго/воздухопроницания"
                checked={vaporCalc}
                onChange={() => dispatch(toggleVaporCalc())}
              ></Form.Check>
              <OverlayTrigger
                overlay={
                  <Tooltip id="vapor-tooltip">
                    Учитывать проверку отсутствия точки росы в утеплителе и излишней проницаемости ограждающей
                    конструкции
                  </Tooltip>
                }
              >
                <button className="i-btn position-absolute"></button>
              </OverlayTrigger>
            </div>
            <div className="obj-param d-flex flex-column">
              <Form.Label
                htmlFor="mr"
                data-tooltip-id="mr-tooltip"
                className="position-relative  w-25"
                data-tooltip-content="коэф"
              >
                m<sub>r</sub>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="vapor-tooltip">
                      Коэффициент, учитывающий особенности региона строительства. По умолчанию принимается 0,63, либо по
                      по разделу 'Энергоэффективность' проекта.
                    </Tooltip>
                  }
                >
                  <button className="i-btn2 position-absolute"></button>
                </OverlayTrigger>
              </Form.Label>

              <Form.Control 
                {...register('mr', {min: 0.63, max: 1 })}
                id="mr" 
                className="w-50" 
                value={mr} 
                onChange={handleMr}
              />
            </div>
            <div className="obj-param">
              <Form.Label
                htmlFor="wet-zone"
                data-tooltip-id="wet-zone"
                className="position-relative"
                data-tooltip-content="зона"
              >
                Зона влажности
                <OverlayTrigger
                  overlay={
                    <Tooltip id="vapor-tooltip">
                      Для населенных пунктов без данных в СП 50 о зоне влажности необходимо выбрать: А - для сухой, Б -
                      для нормальной и влажной
                    </Tooltip>
                  }
                >
                  <button className="i-btn2 position-absolute"></button>
                </OverlayTrigger>
              </Form.Label>
              {city.s ? (
                <div>{city.s}</div>
              ) : (
                <div className="d-flex">
                  <Form.Check   //со стейтами все было понятно, с редаксом хук форм нет
                    type='radio'
                    name='humid'
                    className=" ms-2"
                    id="humidity-a"
                    label="А"
                    checked={humidityZone}
                    onChange={() => dispatch(setHumidityZone(true))}
                  ></Form.Check>
                  <Form.Check
                    type='radio'
                    name='humid'
                    className=" ms-2"
                    id="humidity-b"
                    label="Б"
                    checked={!humidityZone}
                    onChange={() => dispatch(setHumidityZone(false))}
                  ></Form.Check>
                </div>
             )}
            </div>
          </div>
          <div className="navbnt position-relative mt-3 mb-3"></div>
        </form>
  );
}
