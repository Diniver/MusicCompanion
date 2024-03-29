export interface iButton {
  btnID: string;
  btnTitle: string;
  fileName: string;
  useTrackTitle: boolean;
  audioData: any;
  volume: number;
  color: string;
  inGroup: boolean;
  loop: boolean;
  trimStart: number;
  trimEnd: number;
  isActive: boolean;
  btnDisabled: boolean;
}
