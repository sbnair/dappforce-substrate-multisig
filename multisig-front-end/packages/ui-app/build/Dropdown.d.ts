import { BareProps } from './types';
import React from 'react';
declare type Props<Option> = BareProps & {
    defaultValue?: any;
    isPrimary?: boolean;
    help?: React.ReactNode;
    isButton?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    isMultiple?: boolean;
    label?: React.ReactNode;
    onChange?: (value: any) => void;
    onSearch?: (filteredOptions: Array<any>, query: string) => Array<Option>;
    options: Array<Option>;
    placeholder?: string;
    renderLabel?: (item: any) => any;
    transform?: (value: any) => any;
    value?: any;
    withLabel?: boolean;
};
export default class Dropdown<Option> extends React.PureComponent<Props<Option>> {
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props<Option>): void;
    render(): JSX.Element;
    private onChange;
}
export {};
