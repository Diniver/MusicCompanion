export interface iButton {
    buttonID: number;
    fileLocation: string;
    fileTitle: string;
    label: string;
    useFileTitle: boolean;
    volume: number;
    color: string;
    isActive: boolean;
    loop: boolean;
    trimStart: number;
    trimEnd:number;
}