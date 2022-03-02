import { Stamp } from "../model/image_data_models";
import baseBlue from "../img/base-blue.png";
import baseWhite from "../img/base-white.png";
import baseGrey from "../img/base-grey.png";
import baseGreen from "../img/base-green.png";
import { BaseColor } from "./enums";

export const stampsDatabase: Stamp[] = [
  {
    imageName: "stempel-schnecke1.png",
    name: "Schnecke 1",
  },
];

export const colorDatabase: Stamp[] = [
  {
    imageName: "color-blue.png",
    name: "Blau",
  },
  {
    imageName: "color-white.png",
    name: "Weiß",
  },
  {
    imageName: "color-grey.png",
    name: "Grau",
  },
  {
    imageName: "color-green.png",
    name: "Grün",
  },
];

export const baseDatabase: Stamp[] = [
  {
    imageName: "base-blue.png",
    image: baseBlue,
    name: "Blau",
    enum: BaseColor.Blue,
  },
  {
    imageName: "base-white.png",
    image: baseWhite,
    name: "Weiß",
    enum: BaseColor.White,
  },
  {
    imageName: "base-grey.png",
    image: baseGrey,
    name: "Grau",
    enum: BaseColor.Grey,
  },
  {
    imageName: "base-green.png",
    image: baseGreen,
    name: "Grün",
    enum: BaseColor.Green,
  },
];
