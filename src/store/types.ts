export type RootState = {
    firstForm: FirstForm | undefined;
}

export type FirstForm = {
    buildingAim: number,
    buildingType: number,
    city: string | undefined,
    concreteWall: boolean,
    humidity: number,
    innerTemp: number,
    mr: number,
    objAddress: string | undefined,
    objName: string | undefined,
    vaporCalc: boolean,
    humidityZone: boolean
}