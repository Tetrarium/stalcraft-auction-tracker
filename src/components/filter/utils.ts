import { IInitData } from "@/types/initData";

interface IFilterItem {
  title: string;
  value: string;
}

export function getFilterSelectItems(data?: IInitData): {
  names: IFilterItem[];
  rarities: IFilterItem[];
  patterns: IFilterItem[];
} {
  if (!data) {
    return {
      names: [],
      rarities: [],
      patterns: [],
    };
  }

  const names: IFilterItem[] = data.artifactNames
    .list
    .map((name, i) => ({
      title: name,
      value: i.toString(),
    }));

  const rarities: IFilterItem[] = data.artifactRarity
    .list
    .map((name, i) => ({
      title: name,
      value: i.toString(),
    }));

  const patterns = data.artifactPattern
    .list
    .map(pattern => ({
      title: pattern.toString(),
      value: pattern.toString(),
    }));

  return {
    names,
    rarities,
    patterns,
  };
}