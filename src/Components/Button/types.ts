export enum ButtonType{
    Primary = 'primary',
    Secondary = 'secondary',
    // Error = 'error',
}

export type ButtonClassnamesType = {
    [key in ButtonType] : string;
}

export type ButtonPropsType = {
    title: string;
    onClick: () => void;
    className: string;
    disabled: boolean;
    type: ButtonType;
}