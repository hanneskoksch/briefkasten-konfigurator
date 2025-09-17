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
  };
  color: BaseColor;
  nameField: boolean;
  selectedStamp: string | null;
}
