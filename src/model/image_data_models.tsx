import { BaseColor } from "../utils/enums";

export interface StampPosition {
  top: number;
  left: number;
}

export interface Stamp {
  imageName: string;
  image?: string;
  name: string;
  enum?: BaseColor;
}
