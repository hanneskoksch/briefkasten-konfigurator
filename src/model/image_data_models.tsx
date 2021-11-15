export interface StampPosition {
  top: number;
  left: number;
}

export interface StampsMap {
  [key: number]: null | Stamp;
}

export interface Stamp {
  imageName: String;
  name: String;
}
