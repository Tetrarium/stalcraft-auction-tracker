enum ArtifactRarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Special = 'Special',
  Rare = 'Rare',
  Exceptional = 'Exceptional',
  Legendary = 'Legendary',
}

interface ArtifactNames {
  list: string[];
  map: Record<string, string>;
}

interface ArtifactRarityMap {
  list: ArtifactRarity[];
  map: Record<string, ArtifactRarity>;
}

interface AtrifactPattern {
  list: number[];
}

export interface IInitData {
  artifactNames: ArtifactNames;
  artifactRarity: ArtifactRarityMap;
  artifactPattern: AtrifactPattern;
}