enum ArtifactRarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Special = 'Special',
  Rare = 'Rare',
  Exceptional = 'Exceptional',
  Legendary = 'Legendary',
}

type ArtifactName = string;
type ArtifactId = string;

type ArtifactRarityValue = string;

type ArtifactPatternValue = number;

interface ArtifactNames {
  list: ArtifactName[];
  map: Record<ArtifactId, ArtifactName>;
}

interface ArtifactRarityMap {
  list: ArtifactRarity[];
  map: Record<ArtifactRarityValue, ArtifactRarity>;
}

interface AtrifactPattern {
  list: ArtifactPatternValue[];
}

export interface IInitData {
  artifactNames: ArtifactNames;
  artifactRarity: ArtifactRarityMap;
  artifactPattern: AtrifactPattern;
}