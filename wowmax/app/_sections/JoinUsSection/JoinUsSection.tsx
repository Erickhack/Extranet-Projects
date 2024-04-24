'use client';

import { useScrollTrigger } from '@/shared/hooks';
import { CompanyCard, DebankLogo, Link, TelegramLogo, TwitterLogo } from '@/shared/components';

import styles from './JoinUsSection.module.scss';

function JoinUsSection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.content}>
        <h2 className={styles.title}>Join us</h2>
        <div className={styles.cards}>
          <div className={styles.card} style={{ transform: 'translateY(30%)' }}>
            <Link href="/change-me">
              <CompanyCard Logo={TelegramLogo} title="Telegram" details="7k + subscribers" />
            </Link>
          </div>
          <div className={styles.card} style={{ transform: 'translateY(60%)' }}>
            <Link href="/change-me">
              <CompanyCard Logo={DebankLogo} title="DeBank" details="$300m TFL" hoverColor="purple" />
            </Link>
          </div>
          <div className={styles.card} style={{ transform: 'translateY(100%)' }}>
            <Link href="/change-me">
              <CompanyCard Logo={TwitterLogo} title="Twitter" details="22k + followers" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { JoinUsSection };
