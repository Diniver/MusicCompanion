export interface IButton {
    buttonID: number;
    fileLocation: string;
    fileTitle: string;
    label: string;
    useFileTitle: boolean;
    volume: number;
    colorID: number;
    isActive: boolean;
    loop: boolean;
    trimStart: number;
    trimEnd:number;
}

export interface IColor {
    colorID: number;
    colorName: string;
    inGroop: boolean;
}