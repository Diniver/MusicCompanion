export interface iButton {
  id?: number;
  btnTitle: string;
  audioData: any;
  volume: number;
  color: string;
  inGroup: boolean;
  loop: boolean;
  trimStart: number;
  trimEnd: number;
  isActive: boolean;
}
