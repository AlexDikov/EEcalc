export type BracketQuantityListProps = {
  wallArea?: number;
  wallType?: string;
  concreteWallArea?: number;
  bracketsArray: {
    bracketMaterial: string;
    bracketType: string;
    bracketName: string;
    bracketQuantity: number;
    bracketBase: string;
    bracketConduction: number;
  }[];
};
