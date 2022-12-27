import { Stamp, Base, Color } from "../model/image_data_models";
import baseBlue from "../img/base-blue.png";
import baseWhite from "../img/base-white.png";
import baseGrey from "../img/base-grey.png";
import baseGreen from "../img/base-green.png";
import { BaseColor } from "./enums";
import stamp1 from "../img/stamp-1.png";
import stamp2 from "../img/stamp-2.png";

export const stampsDatabase: Stamp[] = [
  {
    name: "Schnecke 1",
    image: stamp1,
  },
  {
    name: "Blatt 1",
    image: stamp2,
  },
];

export const colorDatabase: Color[] = [
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

export const baseDatabase: Base[] = [
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
