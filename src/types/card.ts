export interface IBonus {
  bonusName: string;
  textMinAndMax: string;
  min: number;
  max: number;
}

export interface ICard {
  uniqueId: number;
  itemId: string;
  name: string;
  qlt: number;
  qltInfo: {
    labelQlt: string;
    labelPercentQlt: string;
  };
  ptn?: number | null;
  defaultBonusInfo: {
    ptnNumber: number;
    defaultBonuses: IBonus[];
  };
  bonusInfo?: string[] | null;
  explored: boolean;
  charge: number;
  cost: number;
  targetPrice: number;
  profit: number;
  profitPercent: number;
}