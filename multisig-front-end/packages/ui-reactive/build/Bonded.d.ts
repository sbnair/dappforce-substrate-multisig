import { AccountId, AccountIndex, Address, Option, StakingLedger } from '@polkadot/types';
import { BareProps, CallProps } from '@polkadot/ui-api/types';
import React from 'react';
declare type Props = BareProps & CallProps & {
    children?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    label?: string;
    staking_ledger?: Option<StakingLedger>;
};
export declare class BondedDisplay extends React.PureComponent<Props> {
    render(): JSX.Element | null;
}
declare const _default: React.ComponentType<Pick<Props, "label" | "style" | "className" | "children" | "callResult" | "callUpdated" | "callUpdatedAt" | "params" | "staking_ledger">>;
export default _default;
