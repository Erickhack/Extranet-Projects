import { ColumnItem } from './types';

const column1: ColumnItem[] = [
  {
    id: 'all-dex-liquidity',
    text: 'All DEX liquidity',
  },
  {
    id: 'best-swap-routing',
    text: 'Best swap routing',
  },
  {
    id: 'swap-protection',
    text: 'Swap protection',
  },
];

const column2: ColumnItem[] = [
  {
    id: 'private-liquidity',
    text: 'Private liquidity',
  },
  {
    id: 'slippage-arbitrage',
    text: 'Slippage arbitrage',
  },
  {
    id: 'gas-minimization',
    text: 'Gas minimization',
  },
];

export { column1, column2 };
