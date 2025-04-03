export const buildingTypeOptions = [
  {
    name: 'Лечебное, детское',
    value: 'social',
  },
  {
    name: 'Жилое, гостиница',
    value: 'living',
  },
  {
    name: 'Общественное, административное',
    value: 'commercial',
  },
  {
    name: 'Производственное',
    value: 'factory',
  },
];

export const wallTypeOptions = [
  {
    name: 'Монолитная',
    value: 'monolith',
  },
  {
    name: 'Монолитно-каркасная',
    value: 'frame',
  },
  {
    name: 'Беcкаркасная',
    value: 'brick',
  },
];

export const bracketTypeOptions = [
  {
    label: 'рядовой',
    value: 'light',
  },
  {
    label: 'межэтажный',
    value: 'heavy',
  },
];

export const bracketMaterialOptions = [
  {
    label: 'алюминий',
    value: 'aluminium',
  },
  {
    label: 'сталь',
    value: 'steel',
  },
];

export const bracketNameOptions = [
  {
    name: 'MFT-MF S',
    value: 'mf-s',
  },
  {
    name: 'MFT-MF M',
    value: 'mf-m',
  },
  {
    name: 'MFT-MF L',
    value: 'mf-l',
  },
];

export const windowPositionOptions = [
  {
    label: '-100',
    value: 'inner',
  },
  {
    label: '0',
    value: 'flat',
  },
  {
    label: '+100',
    value: 'outer',
  },
];

export const insulationPositionOptions = [
  {
    label: '0',
    value: 'zero',
  },
  {
    label: '20',
    value: 'twenty',
  },
  {
    label: '60',
    value: 'sixty',
  },
];

export const anchorDepthOptions = [
  {
    name: 'L<2',
    value: '0.006',
  },
  {
    name: '2<L<6',
    value: '0.004',
  },
  {
    name: '6<L<11',
    value: '0.002',
  },
];

export const insulationOptions = [
  {
    value: 'rockwool',
    name: 'Минеральная вата',
  },
  {
    value: 'pu',
    name: 'Полиуретан',
  },
  {
    value: 'xps',
    name: 'Полистирол',
  },
];

export const insulationDensityOptions = [
  {
    value: '500',
    name: '500',
  },
  {
    value: '400',
    name: '400',
  },
  {
    value: '300',
    name: '300',
  },
];

export const blockOptions = [
  {
    value: 'foamblock',
    name: 'Пеноблок',
  },
  {
    value: 'brick',
    name: 'Кирпич',
  },
  {
    value: 'cerbrick',
    name: 'Керамзитобетон',
  },
];

export const blockDensityOptions = {
  foamblock: [
    {
      value: '500',
      name: '500',
    },
    {
      value: '400',
      name: '400',
    },
  ],
  brick: [
    {
      value: '300',
      name: '300',
    },
    {
      value: '200',
      name: '200',
    },
  ],
  cerbrick: [
    {
      value: '120',
      name: '120',
    },
    {
      value: '80',
      name: '80',
    },
  ],
};
