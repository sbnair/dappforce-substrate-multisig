/// <reference types="react" />
import { BareProps } from '../types';
export declare type Button$Sizes = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
export declare type ButtonProps = BareProps & {
    children?: React.ReactNode;
    floated?: 'left' | 'right';
    icon?: string;
    isBasic?: boolean;
    isCircular?: boolean;
    isDisabled?: boolean;
    isNegative?: boolean;
    isPositive?: boolean;
    isPrimary?: boolean;
    label?: React.ReactNode;
    onClick?: () => void | Promise<void>;
    type?: 'submit' | 'button';
    size?: Button$Sizes;
    tabIndex?: number;
};
export declare type DividerProps = BareProps;
export declare type GroupProps = BareProps & {
    children?: React.ReactNode;
    isBasic?: boolean;
    isCentered?: boolean;
};
export declare type GroupType = React.ComponentType<GroupProps> & {
    Divider: React.ComponentType<DividerProps>;
};
export declare type ButtonType = React.ComponentType<ButtonProps> & {
    Divider: React.ComponentType<DividerProps>;
    Group: GroupType;
    Or: React.ComponentType<BareProps>;
};
