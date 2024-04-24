'use client';

import {
  ArrowUpRightIcon,
  ButtonLink,
  HackenLogo,
  ProofedByHacken,
  SecurityIcon,
  ShieldBack,
  ShieldFront,
  ShieldLight,
} from '@/shared/components';
import { useScrollTrigger } from '@/shared/hooks';

import styles from './SecuritySection.module.scss';

function SecuritySection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.headerButton}>
            <ButtonLink href="/change-me" theme="bordered" text="Security" color="lime" Icon={SecurityIcon} />
          </div>
          <p className={styles.details}>You are protected 10 out of 10 on security audit</p>
          <p className={styles.prefix}>Audited by</p>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <HackenLogo />
            </div>
          </div>
          <div className={styles.button}>
            <ButtonLink href="/change-me" text="View Audit" Icon={ArrowUpRightIcon} color="white" />
          </div>
          <div className={styles.label}>
            <ProofedByHacken />
          </div>
        </div>
        <div className={styles.backdrop}>
          <div className={styles.backdropContainer}>
            <div className={styles.backdropBack}>
              <ShieldBack />
            </div>
            <div className={styles.backdropLight}>
              <ShieldLight />
            </div>
          </div>
          <div className={styles.backdropFront}>
            <ShieldFront />
          </div>
        </div>
      </div>
    </div>
  );
}

export { SecuritySection };
