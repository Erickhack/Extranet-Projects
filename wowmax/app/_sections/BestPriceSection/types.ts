type CardAssetID =
  | 'best-price'
  | 'best-swap-routing'
  | 'all-dex-liquidity'
  | 'swap-protection'
  | 'private-liquidity'
  | 'slippage-arbitrage'
  | 'gas-minimization';

type ColumnItem = {
  id: CardAssetID;
  text: string;
};

export type { CardAssetID, ColumnItem };
