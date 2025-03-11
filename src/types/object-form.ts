export type ObjectForm = {
  buildingType: number;
  wallType: number;
  city: number;
  concreteWall: boolean;
  innerHumidity: number;
  innerTemp: number;
  mr: number;
  objectAddress: string | undefined;
  objectName: string | undefined;
  vaporCalc: boolean;
  humidityZone: boolean;
};
