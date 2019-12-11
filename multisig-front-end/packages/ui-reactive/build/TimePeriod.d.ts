import { BareProps, CallProps } from '@polkadot/ui-api/types';
import React from 'react';
import { Moment, Option } from '@polkadot/types';
declare type Props = BareProps & CallProps & {
    children?: React.ReactNode;
    label?: string;
    timestamp_blockPeriod?: Moment | Option<Moment>;
    timestamp_minimumPeriod?: Moment;
};
export declare class TimePeriod extends React.PureComponent<Props> {
    render(): JSX.Element;
}
declare const _default: React.ComponentType<Pick<Props, "label" | "style" | "className" | "children" | "callResult" | "callUpdated" | "callUpdatedAt" | "timestamp_blockPeriod" | "timestamp_minimumPeriod">>;
export default _default;
