/* eslint-disable @next/next/no-img-element */

'use client';

import { ArbitrageIcon, ButtonLink } from '@/shared/components';
// import { LazyLottie } from '@/shared/components/Lottie';
import { useScrollTrigger } from '@/shared/hooks';
import arbitrageImage from '@/shared/assets/images/arbitrage.png';

import styles from './ArbitrageSection.module.scss';

function ArbitrageSection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.button}>
            <ButtonLink href="/change-me" theme="bordered" text="Arbitrage" Icon={ArbitrageIcon} />
          </div>
          <h2 className={styles.title}>Built-in arbitrage engine</h2>
          <p className={styles.details}>
            WOWMAX is the first DEX aggregator that aims to bring the whole DEX market back to the perfect equilibrium
            by performing back-run arbitrage of all available tokens and redirecting the profit to the traders.
          </p>
        </div>
        <div className={styles.image}>
          <img src={arbitrageImage.src} alt="arbitrage" width={660} height={464} />
          {/* <LazyLottie getJson={() => import('@/shared/assets/animations/infographic.json')} id="infographic" /> */}
        </div>
      </div>
    </div>
  );
}

export { ArbitrageSection };
