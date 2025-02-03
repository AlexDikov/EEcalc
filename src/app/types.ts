export interface RootState {
    city: CityType,
    buildingAim: BuildingAimType,
    buildingType: BuildingTypeType,
    concreteWall: ConcreteWallType,
    humidity: humidityType,
    humidityZone: humidityZoneType,
    innerTemp: InnerTempType,
    mr: mrType,
    objAddress: ObjAddressType,
    objName: ObjNameType,
    vaporCalc: vaporCalcType,

  }

export interface CityType {
    name: string,
    t: number,
    tm: number,
    z8: number,
    t8: number,
    z10: number,
    t10: number,
    w: number,
    vm: number,
    v: number,
    s: string,
}

export type BuildingAimType = number;

export type BuildingTypeType = number;

export type ConcreteWallType = boolean;

export type humidityType = number;

export type humidityZoneType = boolean;

export type InnerTempType = number;

export type mrType = number;

export type ObjAddressType = string;

export type ObjNameType = string;

export type vaporCalcType = boolean;