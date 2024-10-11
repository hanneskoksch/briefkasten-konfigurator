import { BaseColor } from "../utils/enums";

export interface Base {
  imageName: string;
  image: string;
  name: string;
  enum: BaseColor;
}

export interface Color {
  imageName: string;
  name: string;
}

export interface Stamp {
  name: string;
  image: string;
  position?: number;
  id?: number;
}

export interface Configuration {
  stamps: {
    [key: number]: string | null;
    // 1: string | null;
    // 2: string | null;
    // 3: string | null;
    // 4: string | null;
    // 5: string | null;
    // 6: string | null;
    // 7: string | null;
    // 8: string | null;
    // 9: string | null;
  };
  color: BaseColor;
  nameField: boolean;
}
