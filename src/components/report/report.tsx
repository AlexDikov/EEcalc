import { useSelector } from 'react-redux';
import { bracketDataSelector, objectDataSelector, systemDataSelector, wallDataSelector } from '../../store';
import { cities } from '../../constants';
import { bracketDensity, useReportCalculations } from '../../utils';
import { BracketQuantityList, BracketHeatConductionList, BracketInfoList } from '../report';
import { ReportTable } from './report-table';
import { bracketFormMock, objectFormMock, systemFormMock, wallFormMock } from '../../__mock__';

export const Report = () => {
  // const objectData = useSelector(objectDataSelector);
  // const wallData = useSelector(wallDataSelector);
  // const systemData = useSelector(systemDataSelector);
  // const bracketData = useSelector(bracketDataSelector)!;

  const objectData = objectFormMock;
  const wallData = wallFormMock;
  const systemData = systemFormMock;
  const bracketData = bracketFormMock;

  const {
    cityValue,
    buildingType,
    wallType,
    innerHumidity,
    innerTemp,
    mr,
    objectAddress,
    objectName,
    hasConcreteWall,
  } = objectData!;

  const {
    blockDensity,
    blockHeatConduction,
    blockName,
    blockThickness,
    concreteHeatConduction,
    concreteThickness,
    hasSecondInsulation,
    insulationDensity,
    insulationHeatConduction,
    insulationName,
    insulationThickness,
    isInsulationSp,
    secondInsulationDensity,
    secondInsulationHeatConduction,
    secondInsulationThickness,
  } = wallData!;

  const {
    wallArea = 0,
    concreteWallArea = 0,
    windowLength = 0,
    concreteWindowLength = 0,
    anchorQuantity,
    concreteAnchorQuantity,
    anchorDepth,
  } = systemData!;

  const city = cities.find((item) => item.value === cityValue)!;

  const { t, tm, t8, t10, v, w, z8, z10 } = city;

  const {
    b,
    a,
    gsop,
    concreteQ,
    blockQ,
    insulationQ,
    secondInsulationQ,
    rObl,
    rCond1,
    rCond2,
    u1,
    u2,
    rRed,
    rRed1,
    rRed2,
    r,
    r1,
    r2,
    windowStance,
    insulationOverlap,
    anchorLength,
  } = useReportCalculations();

  return (
    <>
      <h4>Пояснительная записка к расчету энергоэффективности ограждающей конструкции с системой НВФ</h4>
      <h4>
        Объект : {objectName}, расположенный по адресу : {objectAddress}
      </h4>
      <br />
      <h5>1. Данные для расчета.</h5>
      <div>
        <b>Климатические данные района строительства:</b> <br />
        Климатические данные принимаются по таблице 3.1 СП 131.13330.2020 и пункту 5.7 СП 50.13330.2012; <br />- средняя
        температура наиболее холодной пятидневки, с обеспеченностью 0,92: t = {t} °С;
        <br />- средняя температура наиболее холодного месяца: t<sub>м</sub> = {tm} °С; <br />- средняя температура
        отопительного периода: t<sub>{buildingType === 'social' ? '10' : '8'}</sub> ={' '}
        {buildingType === 'social' ? t10 : t8} °С;
        <br />- продолжительность отопительного периода: z<sub>{buildingType === 'social' ? '10' : '8'}</sub> ={' '}
        {buildingType === 'social' ? z10 : z8} сут;
        <br />- максимальная из скоростей ветра по румбам за январь: ν = {v} м/c;
        <br />- расчетная относительная влажность внутреннего воздуха: φ = {innerHumidity} %; <br />
        <br />
        <b>Микроклимат в здании:</b> <br /> - расчетная температура внутреннего воздуха: t<sub>в</sub>= {innerTemp} °С;{' '}
        <br /> - средняя месячная относительная влажность воздуха наиболее холодного месяца: φ<sub>м</sub> = {w} %.
        <br />
        <br /> <b>Состав стены:</b>
      </div>
      {wallType !== 'block' &&
        (wallType === 'frame' ? (
          hasConcreteWall ? (
            <div>- монолитный железобетон толщиной {concreteThickness} мм;</div>
          ) : (
            <div>
              - монолитный железобетон, для расчета требуемого сопротивления перекрытия толщину принимаем{' '}
              {blockThickness} мм;
            </div>
          )
        ) : (
          <div>- монолитный железобетон толщиной {concreteThickness} мм;</div>
        ))}
      {wallType !== 'monolith' && (
        <div>
          - {blockName} плотностью {blockDensity} кг/м³, толщиной {blockThickness} мм;
        </div>
      )}
      {hasSecondInsulation ? (
        <div>
          - внутренний слой теплоизоляции плотностью {insulationDensity} кг/м³, толщиной {insulationThickness} мм;{' '}
          <br />- внешний слой теплоизоляции плотностью {secondInsulationDensity} кг/м³, толщиной{' '}
          {secondInsulationThickness} мм;
        </div>
      ) : (
        <div>
          - утеплитель {insulationName} {isInsulationSp && <>плотностью {insulationDensity} кг/м³, толщиной</>}{' '}
          {insulationThickness} мм;
        </div>
      )}
      <br />
      <br />
      <b>Расчетные характеристики материалов:</b> <br />
      {wallType !== 'block' && (
        <div>
          {' '}
          Железобетон : <br />- коэффициент теплопроводности материала λ = {concreteHeatConduction} Вт/(м°С);
        </div>
      )}
      {wallType !== 'monolith' && (
        <div>
          {' '}
          Кладка :
          <br /> - коэффициент теплопроводности материала λ = {blockHeatConduction} Вт/(м°С);
        </div>
      )}
      <>
        {hasSecondInsulation ? 'Внутренний слой утеплителя' : 'Утеплитель'} :
        <br /> - коэффициент теплопроводности материала λ = {insulationHeatConduction} Вт/(м°С);
        <br />
      </>
      {hasSecondInsulation && (
        <>
          Внешний слой утеплителя:
          <br /> - коэффициент теплопроводности материала λ = {secondInsulationHeatConduction} Вт/(м°С);
        </>
      )}
      <br /> <b>Характеристики элементов НФС:</b>
      <br />
      Средняя частота кронштейнов на фасаде {bracketDensity(wallArea, concreteWallArea, bracketData)} шт/м² из них:
      <BracketQuantityList />
      <br /> Средняя частота установки тарельчатых анкеров для крепления изоляции {hasConcreteWall && 'на кладке'}:{' '}
      {anchorQuantity ? anchorQuantity : concreteAnchorQuantity} шт/м²
      <br />{' '}
      {hasConcreteWall && (
        <>
          Средняя частота установки тарельчатых анкеров для крепления изоляции на железобетоне: {concreteAnchorQuantity}{' '}
          шт/м²
          <br />
        </>
      )}{' '}
      <br />
      <br /> <h5>2. Требуемое сопротивление теплопередаче.</h5>
      Градусо-сутки отопительного периода для рассматриваемого случая составляют: ГСОП = (t<sub>в</sub> - t
      {buildingType === 'social' ? <sub>10</sub> : <sub>8</sub>}) ∙ z
      {buildingType === 'social' ? <sub>10</sub> : <sub>8</sub>}= ({innerTemp} - ({buildingType === 'social' ? t10 : t8}
      )) ∙ {buildingType === 'social' ? z10 : z8}= {gsop}
      °С∙сут. <br />
      Минимально требуемое приведенное сопротивление теплопередаче стен по СП 50.13330.2012 составляет: <br />R
      <sub>тр</sub> = (a ∙ ГСОП + b) ∙ m<sub>r</sub> = ({a} ∙ {gsop} + {b}) ∙ {mr} = {rObl} м²°С/Вт.
      <br />
      <br /> Удельные потери теплоты через кронштейны в соответствии с заключением НИИСФ РААСН по договору № 12250(2020)
      от «09» декабря 2020 г. находятся по таблицам Г.71, Г.73, Г.74, Г.75 СП 230.1325800.2015 интерполяцией:
      <BracketHeatConductionList />
      <br />У применяемого на данном объекте тарельчатого анкера расстояние от края стального распорного элемента до
      тарелки дюбеля {anchorLength}.
      <br /> В соответствии с таблицей Г4 СП 230.1325800.2015 удельные потери теплоты тарельчатого анкера χ ={' '}
      {anchorDepth} Вт/°С.
      <h5>
        <br />
        3. Расчет приведенного сопротивления теплопередаче фрагмента стены с НФС по приложению Е СП 50.13330.2012.
      </h5>
      Для учета всех теплотехнических неоднородностей фрагмента стены с НФС необходимо оценить фрагмент теплозащитной
      оболочки здания с НФС в целом.
      <br />
      Элементы, составляющие ограждающую конструкцию:
      <br />
      {wallType === 'frame' ? (
        <>
          - заполнение стены со слоем теплоизоляции (плоский элемент 1)
          <br /> - железобетонное перекрытие со слоем теплоизоляции (плоский элемент 2)
        </>
      ) : (
        <>- стена со слоем теплоизоляции (плоский элемент 1)</>
      )}
      <br />
      {wallType !== 'frame' ? (
        '- оконный откос (линейный элемент 1)'
      ) : (
        <>
          - оконный откос, образованный кладкой со слоем теплоизоляции (линейный элемент 1)
          <br /> - оконный откос, образованный железобетонной стеной со слоем теплоизоляции (линейный элемент 2)
        </>
      )}
      <br /> - тарельчатый анкер, крепящий теплоизоляцию к основанию (точечный элемент 1).
      <BracketInfoList />
      <br />
      <br /> <b>Геометрические характеристики проекций элементов.</b>
      <br /> Площадь поверхности фрагмента ограждающей конструкции для расчета R составляет: А ={' '}
      {concreteWallArea + wallArea} м²;
      <br />
      {wallType === 'frame' ? (
        <>
          {hasConcreteWall ? (
            <>
              Площадь стены с основанием из железобетона составляет: {concreteWallArea} м² Площадь стены с основанием из
              кладки составляет {wallArea} м². Общая длина проекции оконного откоса, образованного железобетоном,
              определяется по экспликации оконных проемов и равна: {concreteWindowLength} м.
              <br />
              Длина проекции откосов, приходящаяся на 1 м² площади фрагмента равна l = {concreteWindowLength} /
              {concreteWallArea} = {(concreteWindowLength / concreteWallArea).toFixed(2)} м/м².
              <br /> Общая длина проекции оконного откоса, образованного кладкой, определяется по экспликации оконных
              проемов и равна: {windowLength} м.
              <br />
              Длина проекции откосов, приходящаяся на 1 м² площади фрагмента равна l = {windowLength} /{wallArea} ={' '}
              {(windowLength / wallArea).toFixed(2)} м/м².
            </>
          ) : (
            <>
              Суммарная площадь торцов перекрытий из монолитного железобетона (т.е. площадь проекции на поверхность
              фрагмента) составляет {concreteWallArea} м². <br /> Доля этой площади от общей площади фрагмента
              ограждающей конструкции равна а ={concreteWallArea}/{concreteWallArea + wallArea} ={' '}
              {(concreteWallArea / (concreteWallArea + wallArea)).toFixed(2)}.<br />
              Площадь стены с основанием из кладки составляет {wallArea} м².
              <br /> Доля этой площади от общей площади фрагмента ограждающей конструкции равна а ={wallArea}/
              {concreteWallArea + wallArea} = {(wallArea / (concreteWallArea + wallArea)).toFixed(2)}.
              <br />
              Общая длина проекции оконного откоса, образованного кладкой, определяется по экспликации оконных проемов и
              равна: {windowLength} м.
              <br />
              Длина проекции откосов, приходящаяся на 1 м² площади фрагмента равна l = {windowLength} /
              {concreteWallArea + wallArea} = {(windowLength / (concreteWallArea + wallArea)).toFixed(2)} м/м².
            </>
          )}
        </>
      ) : (
        <>
          Общая длина проекции оконного откоса, образованного стеной, определяется по экспликации оконных проемов и
          равна: {windowLength + concreteWindowLength} м.
          <br />
          Длина проекции откосов, приходящаяся на 1 м² площади фрагмента равна l = {windowLength + concreteWindowLength}
          /{wallArea + concreteWallArea} ={' '}
          {((windowLength + concreteWindowLength) / (wallArea + concreteWallArea)).toFixed(2)} м/м².
        </>
      )}
      <br />
      <br /> <b>Расчет удельных потерь теплоты, обусловленных элементами.</b>
      <br /> Для плоского элемента {wallType === 'frame' ? 1 : ''} удельные потери теплоты определяются по формулам Е.6,
      Е.З СП 50.13330.2012:
      <br />R<sub>{wallType === 'frame' ? 2 : ''}</sub>
      <sup>усл</sup> = 1/α<sub>в</sub> + ∑R
      <sub>s</sub> + 1/α<sub>пр0</sub> = 1/8.7 + {wallType !== 'block' ? concreteQ : blockQ} +{' '}
      {hasSecondInsulation ? `${insulationQ} + ${secondInsulationQ}` : insulationQ}+ 1/12 ={' '}
      {wallType !== 'block' ? rCond1 : rCond2} м²°С/Вт
      <br />U<sub>{wallType === 'frame' && 'monolith'}</sub> = 1/R<sub>{wallType === 'frame' && 'monolith'}</sub>
      <sup>усл</sup> = 1/ {wallType !== 'block' ? rCond1 : rCond2} = {wallType !== 'block' ? u1 : u2} Вт/(м²°С)
      <br />
      {wallType === 'frame' && (
        <>
          Для плоского элемента 2 удельные потери теплоты определяются аналогично: <br />R<sub>2</sub>
          <sup>усл</sup> = 1/8.7 + {blockQ} +{' '}
          {hasSecondInsulation ? `${insulationQ}+${secondInsulationQ}` : `${insulationQ}`} + 1/12 = {rCond2} м²°C/Вт
          <br />U<sub>2</sub> = 1/ {rCond2} = {u2} Вт/(м²°С)
        </>
      )}
      <br />
      Приведенное сопротивление теплопередаче фрагмента стены с НФС представлено в{' '}
      {hasConcreteWall ? '2 таблицах' : 'таблице'} аналогично приложению Е СП 50.13330.2012, что позволяет оценить какое
      влияние оказывает каждый элемент конструкции. Для учета примыканий оконных блоков принимаем характеристики этих
      узлов по таблице Г.33 приложения Г СП 230.1325800.2015 {windowStance} и {insulationOverlap}.
      <br />
      <br />
      <br />
      {!hasConcreteWall && (
        <>
          <ReportTable tableType="any" /> Приведенное сопротивление теплопередаче
          <br />
          Коэффициент теплотехнической однородности стены с НФС: r = R<sub>пр</sub>/R<sub>усл</sub> = {rRed}/
          {wallType === 'monolith' ? rCond1 : rCond2} = {r}
          <br />
        </>
      )}
      {hasConcreteWall && (
        <>
          <ReportTable tableType="concrete" />
          Приведенное сопротивление теплопередаче участка с НФС: R<sub>пр</sub> = {rRed1}
          <br />
          Коэффициент теплотехнической однородности стены с НФС: r = R<sub>пр</sub>/R<sub>усл</sub> = {rRed1}/{rCond1} ={' '}
          {r1}
          <br />
          <ReportTable tableType="block" />
          Приведенное сопротивление теплопередаче участка с НФС: R<sub>пр</sub> = {rRed2}
          <br />
          Коэффициент теплотехнической однородности стены с НФС: r = R<sub>пр</sub>/R<sub>усл</sub> = {rRed2}/{rCond2} ={' '}
          {r2}
        </>
      )}
      <br />
      <br />
      Вывод: утепление рассматриваемого участка объекта {objectName} по адресу: {objectAddress} с приведенным
      сопротивлением теплопередаче {hasConcreteWall ? rRed1 : rRed} м²˚С/Вт удовлетворяет условию теплотехнического
      расчета - приведенное сопротивление меньше требуемого, составляющего {rObl} м²˚С/Вт.
    </>
  );
};
