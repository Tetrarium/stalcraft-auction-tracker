import { IInitData } from "@/types/initData";

interface IFilterItem {
  title: string;
  value: string;
}

export function getFilterSelectItems(data?: IInitData): {
  itemsIds: IFilterItem[];
  qualities: IFilterItem[];
  patterns: IFilterItem[];
} {
  if (!data) {
    return {
      itemsIds: [],
      qualities: [],
      patterns: [],
    };
  }

  const itemsIds: IFilterItem[] = [];
  const artifactNames = data.artifactNames.map;
  for (const [value, title] of Object.entries(artifactNames)) {
    itemsIds.push({
      title,
      value,
    });
  }

  const qualities: IFilterItem[] = data.artifactRarity
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
    itemsIds,
    qualities,
    patterns,
  };
}