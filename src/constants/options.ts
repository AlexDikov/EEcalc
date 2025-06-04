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
    value: 'block',
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

export const aluminiumBracketOptions = [
  {
    name: 'MFT-MF HS',
    value: 'MFT-MF HS',
  },
  {
    name: 'MFT-MF S',
    value: 'MFT-MF S',
  },
  {
    name: 'MFT-MF M',
    value: 'MFT-MF M',
  },
  {
    name: 'MFT-MF LM',
    value: 'MFT-MF LM',
  },
  {
    name: 'MFT-MF L',
    value: 'MFT-MF L',
  },
  {
    name: 'MFT-MF LH',
    value: 'MFT-MF LH',
  },
];

export const aluminiumHeavyBracketOptions = [
  {
    name: 'MFT-RB S',
    value: 'MFT-RB S',
  },
  {
    name: 'MFT-RB M',
    value: 'MFT-RB M',
  },
  {
    name: 'MFT-RB L',
    value: 'MFT-RB L',
  },
  {
    name: 'MFT-RB LH',
    value: 'MFT-RB LH',
  },
];

export const steelBracketOptions = [
  {
    name: 'MFT-MF HS(sts)',
    value: 'MFT-MF HS(sts)',
  },
  {
    name: 'MFT-MF S(sts)',
    value: 'MFT-MF S(sts)',
  },
  {
    name: 'MFT-MF M(sts)',
    value: 'MFT-MF M(sts)',
  },
  {
    name: 'MFT-MF LM(sts)',
    value: 'MFT-MF LM(sts)',
  },
  {
    name: 'MFT-MF L(sts)',
    value: 'MFT-MF L(sts)',
  },
  {
    name: 'MFT-MF LH(sts)',
    value: 'MFT-MF LH(sts)',
  },
];

export const steelHeavyBracketOptions = [
  {
    name: 'MFT-RB S(sts)',
    value: 'MFT-RB S(sts)',
  },
  {
    name: 'MFT-RB M(sts)',
    value: 'MFT-RB M(sts)',
  },
  {
    name: 'MFT-RB LM(sts)',
    value: 'MFT-RB LM(sts)',
  },
  {
    name: 'MFT-RB L(sts)',
    value: 'MFT-RB L(sts)',
  },
  {
    name: 'MFT-RB LH(sts)',
    value: 'MFT-RB LH(sts)',
  },
];

export const bracketBaseOptions = [
  {
    label: 'бетон',
    value: 'concrete',
  },
  {
    label: 'блок/кирпич',
    value: 'block',
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

export const insulationDensityOptions = {
  rockwool: [
    {
      value: '80',
      name: '80',
    },
    {
      value: '80',
      name: '80',
    },
  ],
  pu: [
    {
      value: '50',
      name: '50',
    },
    {
      value: '40',
      name: '40',
    },
  ],
  xps: [
    {
      value: '30',
      name: '30',
    },
    {
      value: '20',
      name: '20',
    },
  ],
};

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
