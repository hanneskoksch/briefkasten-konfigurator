import baseBlue from "../img/base-blue.png";
import baseGreen from "../img/base-green.png";
import baseGrey from "../img/base-grey.png";
import baseWhite from "../img/base-white.png";
import stamp1 from "../img/stamp-1.png";
import stamp2 from "../img/stamp-2.png";
import stamp3 from "../img/stamp-3.png";
import stamp4 from "../img/stamp-4.png";
import stamp5 from "../img/stamp-5.png";
import type { Base, Color, Stamp } from "../model/image_data_models";
import { BaseColor } from "./enums";

export const stampsDatabase: Stamp[] = [
  {
    name: "Schnecke 1",
    image: stamp1,
  },
  {
    name: "Blatt 1",
    image: stamp2,
  },
  {
    name: "Blüte 1",
    image: stamp3,
  },
  {
    name: "Blüte 2",
    image: stamp4,
  },
  {
    name: "Schnecke 2",
    image: stamp5,
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
