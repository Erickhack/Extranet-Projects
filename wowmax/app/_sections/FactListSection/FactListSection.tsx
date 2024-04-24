import { ExchangeCryptoIcon, FaucetIcon, SackDollarIcon, USDCircleIcon } from '@/shared/components';

import styles from './FactListSection.module.scss';

function FactListSection() {
  return (
    <div className={styles.root}>
      <div className={styles.list}>
        <div className={styles.fact}>
          <div className={styles.icon}>
            <SackDollarIcon />
          </div>
          <p className={styles.title}>$3,5B+</p>
          <p className={styles.details}>TVL from DEXes</p>
        </div>
        <div className={styles.fact}>
          <div className={styles.icon}>
            <USDCircleIcon />
          </div>
          <p className={styles.title}>$83M+</p>
          <p className={styles.details}>Lifetime Trade Volume</p>
        </div>
        <div className={styles.fact}>
          <div className={styles.icon}>
            <ExchangeCryptoIcon />
          </div>
          <p className={styles.title}>300</p>
          <p className={styles.details}>Tradable Tokens</p>
        </div>
        <div className={styles.fact}>
          <div className={styles.icon}>
            <FaucetIcon />
          </div>
          <p className={styles.title}>3,044</p>
          <p className={styles.details}>Liquidity Pools</p>
        </div>
      </div>
    </div>
  );
}

export { FactListSection };
