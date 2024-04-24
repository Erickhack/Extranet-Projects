'use client';

import { ButtonLink, DecentralizedIcon } from '@/shared/components';
// import { LazyLottie } from '@/shared/components/Lottie';
import { useScrollTrigger } from '@/shared/hooks';

import styles from './DecentralizedSection.module.scss';
import { FoxCosmosAnimation } from './animations';

function DecentralizedSection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.contentWrapper}>
        <div className={styles.image}>
          {/* <LazyLottie getJson={() => import('@/shared/assets/animations/illuminator.json')} id="illuminator" /> */}
          <FoxCosmosAnimation />
        </div>
        <div className={styles.content}>
          <div className={styles.button}>
            <ButtonLink href="/change-me" theme="bordered" text="Fully Decentralized" Icon={DecentralizedIcon} />
          </div>
          <h2 className={styles.title}>Your trusted gateway to decentralized trading </h2>
          <p className={styles.details}>
            As a decentralized exchange aggregator WOWMAX operates legally without requiring KYC and registration.
          </p>
        </div>
      </div>
    </div>
  );
}

export { DecentralizedSection };
