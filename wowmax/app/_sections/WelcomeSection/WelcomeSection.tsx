'use client';

import { ArrowUpRightIcon, ButtonLink } from '@/shared/components';
import { LazyLottie } from '@/shared/components/Lottie';

import styles from './WelcomeSection.module.scss';
import { CoinsAnimation, FoxAnimation } from './animations';

function WelcomeSection() {
  return (
    <div className={styles.root}>
      <div className={styles.backdrop}>
        <div className={styles.backdropImage}>
          {/* <LazyLottie getJson={() => import('@/shared/assets/animations/crypto-space.json')} id="crypto-space" /> */}
          <CoinsAnimation />
        </div>
        <div className={styles.backdropImage}>
          {/* <LazyLottie getJson={() => import('@/shared/assets/animations/fox-surf.json')} id="fox-surf" /> */}
          <FoxAnimation />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <ButtonLink href="/change-me" text="wowmax" theme="bordered" />
        </div>
        <h1 className={styles.title}>
          <span className={styles.titleRowWrapper}>
            <span className={styles.titleRowText}>Exchange </span>
          </span>
          <span className={styles.titleRowWrapper}>
            <span className={styles.titleRowText}>Crypto at the </span>
          </span>
          <span className={styles.titleRowWrapper}>
            <span className={styles.titleRowText}>Best Prices</span>
          </span>
        </h1>
        <div className={styles.footer}>
          <ButtonLink href="/change-me" text="Start trading" Icon={ArrowUpRightIcon} />
        </div>
      </div>
      <div className={styles.image}>
        <LazyLottie getJson={() => import('@/shared/assets/animations/fox-with-crypto.json')} id="fox-with-crypto" />
      </div>
    </div>
  );
}

export { WelcomeSection };
