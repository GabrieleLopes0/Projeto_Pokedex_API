export interface Pokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  base_experience?: number;
  types?: Array<{
    type: {
      name: string;
    };
  }>;
  sprites?: {
    front_default: string;
  };
}