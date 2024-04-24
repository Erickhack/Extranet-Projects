'use client';

import { ArrowUpRightIcon, ButtonLink, ExchangeIcon, RampLogo } from '@/shared/components';
// import { LazyLottie } from '@/shared/components/Lottie';
import { useScrollTrigger } from '@/shared/hooks';

import styles from './ExchangeSection.module.scss';
import { FoxExchangeAnimation } from './animations';

function ExchangeSection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.button}>
            <ButtonLink href="/change-me" theme="bordered" text="Exchange" Icon={ExchangeIcon} color="white" />
          </div>
          <h2 className={styles.title}>Instantly exchange crypto to fiat and back.</h2>
          <div className={styles.logoWrapper}>
            <p className={styles.prefix}>Powered by</p>
            <div className={styles.logo}>
              <RampLogo />
            </div>
          </div>
          <div className={styles.button}>
            <ButtonLink href="/change-me" text="Buy crypto" Icon={ArrowUpRightIcon} color="yellow" />
          </div>
        </div>
        <div className={styles.backdrop}>
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              {/* <LazyLottie getJson={() => import('@/shared/assets/animations/fox-on-planet.json')} id="fox-on-planet" /> */}
              <FoxExchangeAnimation />
            </div>
          </div>
        </div>
        {/* <div className={styles.fox}>
          <FoxExchangeAnimation />
        </div> */}
      </div>
    </div>
  );
}

export { ExchangeSection };
