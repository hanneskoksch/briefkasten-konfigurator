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
  images: string[];
  position?: number;
}
