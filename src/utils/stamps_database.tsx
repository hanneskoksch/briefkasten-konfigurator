import { Stamp, Base, Color } from "../model/image_data_models";
import baseBlue from "../img/base-blue.png";
import baseWhite from "../img/base-white.png";
import baseGrey from "../img/base-grey.png";
import baseGreen from "../img/base-green.png";
import { BaseColor } from "./enums";
import stamp1 from "../img/stamp-1.png";
import stamp1tl from "../img/stamp-1-tl.png";
import stamp1tm from "../img/stamp-1-tm.png";
import stamp1tr from "../img/stamp-1-tr.png";
import stamp1ml from "../img/stamp-1-ml.png";
import stamp1mm from "../img/stamp-1-mm.png";
import stamp1mr from "../img/stamp-1-mr.png";
import stamp1bl from "../img/stamp-1-bl.png";
import stamp1bm from "../img/stamp-1-bm.png";
import stamp1br from "../img/stamp-1-br.png";
import stamp2 from "../img/stamp-2.png";
import stamp2tl from "../img/stamp-2-tl.png";
import stamp2tm from "../img/stamp-2-tm.png";
import stamp2tr from "../img/stamp-2-tr.png";
import stamp2ml from "../img/stamp-2-ml.png";
import stamp2mm from "../img/stamp-2-mm.png";
import stamp2mr from "../img/stamp-2-mr.png";
import stamp2bl from "../img/stamp-2-bl.png";
import stamp2bm from "../img/stamp-2-bm.png";
import stamp2br from "../img/stamp-2-br.png";

export const stampsDatabase: Stamp[] = [
  {
    name: "Schnecke 1",
    image: stamp1,
    images: [
      stamp1tl,
      stamp1tm,
      stamp1tr,
      stamp1ml,
      stamp1mm,
      stamp1mr,
      stamp1bl,
      stamp1bm,
      stamp1br,
    ],
  },
  {
    name: "Blatt 1",
    image: stamp2,
    images: [
      stamp2tl,
      stamp2tm,
      stamp2tr,
      stamp2ml,
      stamp2mm,
      stamp2mr,
      stamp2bl,
      stamp2bm,
      stamp2br,
    ],
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
