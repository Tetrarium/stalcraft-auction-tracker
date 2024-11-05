interface IRarity {
  percentQlt: string;
  rarity: string;
}

export function getRarity(qlt?: number): IRarity {
  const defaultRarity: IRarity = {
    percentQlt: '0-100%',
    rarity: 'common'
  };

  if (!qlt) return defaultRarity;

  const rarities: IRarity[] = [
    defaultRarity,
    {
      percentQlt: '100-110%',
      rarity: 'uncommon',
    },
    {
      percentQlt: '110-120%',
      rarity: 'special',
    },
    {
      percentQlt: '120-130%',
      rarity: 'Rare',
    },
    {
      percentQlt: '130-140%',
      rarity: 'exceptional',
    },
    {
      percentQlt: '140-150%',
      rarity: 'legendary',
    }
  ];

  return rarities[qlt] || defaultRarity;
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('ru-RU').format(value);
}