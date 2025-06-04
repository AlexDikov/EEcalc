import { anchorDepthOptions, cities, coefA, coefB } from '../../constants';
import { interpolation } from '../interpolation';
import { bracketFormMock, objectFormMock, systemFormMock, wallFormMock } from '../../__mock__';

export const useReportCalculations = () => {
  // const objectData = useSelector(objectDataSelector);
  // const wallData = useSelector(wallDataSelector);
  // const systemData = useSelector(systemDataSelector);
  // const bracketData = useSelector(bracketDataSelector);

  const objectData = objectFormMock;
  const wallData = wallFormMock;
  const systemData = systemFormMock;
  const bracketData = bracketFormMock;

  const { cityValue, buildingType, wallType, innerTemp, mr, hasConcreteWall } = objectData!;

  const {
    blockHeatConduction,
    blockThickness,
    concreteHeatConduction,
    concreteThickness,
    insulationHeatConduction,
    insulationThickness,
    secondInsulationHeatConduction,
    secondInsulationThickness,
  } = wallData!;

  const {
    wallArea,
    concreteWallArea = 0,
    windowLength,
    concreteWindowLength = 0,
    anchorQuantity,
    concreteAnchorQuantity = 0,
    anchorDepth,
    windowPosition,
    insulationPosition,
  } = systemData!;

  const brackets = bracketData?.bracket;

  const city = cities.find((city) => city.value === cityValue)!;

  const anchorLength = anchorDepthOptions.find((item) => +item.value === anchorDepth);

  const b = () => {
    if (buildingType === 'social') return coefB.SOCIAL;
    if (buildingType === 'living') return coefB.LIVING;
    if (buildingType === 'commercial' || buildingType === 'factory') return coefB.COMMERCIAL;
    else return 0;
  };
  const a = () => {
    if (buildingType === 'social') return coefA.SOCIAL;
    if (buildingType === 'living') return coefA.LIVING;
    if (buildingType === 'commercial') return coefA.COMMERCIAL;
    else return 0;
  };

  const gsop = +(
    buildingType === 'social' ? (innerTemp - city.t10) * city.z10 : (innerTemp - city.t8) * city.z8
  ).toFixed(0);

  const blockShare = wallArea / (concreteWallArea + wallArea);
  const concreteShare = concreteWallArea / (concreteWallArea + wallArea);

  const concreteQ = concreteThickness ? +(concreteThickness / concreteHeatConduction / 1000).toFixed(3) : 0;
  const blockQ = blockThickness ? +(blockThickness / blockHeatConduction / 1000).toFixed(3) : 0;
  const insulationQ = +(insulationThickness / insulationHeatConduction / 1000).toFixed(3);
  const secondInsulationQ = secondInsulationThickness
    ? +(secondInsulationThickness / secondInsulationHeatConduction / 1000).toFixed(3)
    : 0;

  const rObl = +((a() * gsop + b()) * mr).toFixed(2);

  const windowLoss = interpolation(wallType, wallData!, systemData!, 'block');
  const concreteWindowLoss = interpolation(wallType, wallData!, systemData!, 'concrete');

  const linearLoss = (type: string) => {
    if (type === 'any')
      return (windowLoss * windowLength + concreteWindowLoss * concreteWindowLength) / (concreteWallArea + wallArea);
    if (type === 'concrete' && concreteWindowLength)
      return (concreteWindowLoss * concreteWindowLength) / concreteWallArea;
    if (type === 'block') return (windowLoss * windowLength) / wallArea;
    else return 0;
  };

  const pointLoss = (type: string) => {
    let totalLoss = type === 'any' ? (anchorQuantity + concreteAnchorQuantity) * anchorDepth : 0;

    brackets?.forEach((item) => {
      if (!hasConcreteWall)
        totalLoss += (item.bracketConduction * item.bracketQuantity) / (concreteWallArea + wallArea);
      else
        totalLoss +=
          item.bracketBase === type
            ? (item.bracketConduction * item.bracketQuantity) / (concreteWallArea + wallArea)
            : 0;
    });
    return totalLoss;
  };

  const rCond1 = +(1 / 8.7 + concreteQ + insulationQ + secondInsulationQ + 1 / 12).toFixed(2);
  const rCond2 = +(1 / 8.7 + blockQ + insulationQ + secondInsulationQ + 1 / 12).toFixed(2);

  const u1 = +(1 / rCond1).toFixed(2);
  const u2 = +(1 / rCond2).toFixed(2);

  const rRed = +(
    1 /
    ((wallType !== 'block' ? u1 * (concreteWallArea / (wallArea + concreteWallArea)) : 0) +
      (wallType !== 'monolith' ? u2 * (wallArea / (wallArea + concreteWallArea)) : 0) +
      linearLoss('any') +
      pointLoss('any'))
  ).toFixed(2);

  const rRed1 = hasConcreteWall
    ? +(1 / (u1 + linearLoss('concrete') + pointLoss('concrete') + concreteAnchorQuantity * anchorDepth)).toFixed(2)
    : 0;

  const rRed2 = +(1 / (u2 + linearLoss('block') + pointLoss('block') + anchorQuantity * anchorDepth)).toFixed(2);

  const r = +(rRed / rCond2).toFixed(2);

  const r1 = +(rRed1 / rCond1).toFixed(2);

  const r2 = +(rRed2 / rCond2).toFixed(2);

  const windowStance = () => {
    if (windowPosition === 'inner') return 'как для рам, утопленных в стену на 100 мм';
    if (windowPosition === 'flat') return 'как для рам сразу за утеплителем';
    if (windowPosition === 'outer') return 'как для рам, вынесенных за стену на 100 мм';
  };

  const insulationOverlap = () => {
    if (insulationPosition === 'zero') return 'без нахлеста утеплителя на раму';
    if (insulationPosition === 'twenty') return 'c нахлестом утеплителя на раму 20 мм';
    if (insulationPosition === 'sixty') return 'c нахлестом утеплителя на раму 60 мм';
  };

  const anchorPcs = anchorQuantity ? anchorQuantity : concreteAnchorQuantity;

  const qPercent = () => {
    let bracketsPercent =
      (u1 * concreteWallArea) / (wallArea + concreteWallArea) +
      (concreteWindowLoss * concreteWindowLength) / (wallArea + concreteWallArea) +
      (u2 * wallArea) / (wallArea + concreteWallArea) +
      (windowLoss * windowLength) / (wallArea + concreteWallArea) +
      anchorPcs * anchorDepth;
    brackets!.forEach((item) => {
      bracketsPercent += (item.bracketConduction * item.bracketQuantity) / (concreteWallArea + wallArea);
    });

    return bracketsPercent * 0.01;
  };

  const calculation = {
    a: a(),
    anchorLength: anchorLength!.name,
    b: b(),
    blockShare: blockShare,
    blockQ: blockQ,
    concreteShare: concreteShare,
    concreteQ: concreteQ,
    concreteWindowLoss: concreteWindowLoss,
    gsop: gsop,
    insulationQ: insulationQ,
    insulationOverlap: insulationOverlap(),
    linearLoss: linearLoss('any'),
    concreteLinearLoss: linearLoss('concrete'),
    rCond1: rCond1,
    rCond2: rCond2,
    rRed: rRed,
    rRed1: rRed1,
    rRed2: rRed2,
    r: r,
    r1: r1,
    r2: r2,
    rObl: rObl,
    secondInsulationQ: secondInsulationQ,
    u1: u1,
    u2: u2,
    windowLoss: windowLoss,
    windowStance: windowStance(),
    qPercent: qPercent(),
  };

  return calculation;
};
