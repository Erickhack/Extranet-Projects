'use client';

import { ButtonLink, MailIcon, SupportIcon, TelegramIcon } from '@/shared/components';
// import { LazyLottie } from '@/shared/components/Lottie';
import { useScrollTrigger } from '@/shared/hooks';

import styles from './SupportSection.module.scss';
import { FoxSupportAnimation } from './animations';

function SupportSection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.headerButton}>
            <ButtonLink href="/change-me" theme="bordered" text="Support" Icon={SupportIcon} color="white" />
          </div>
          <h2 className={styles.title}>Support that is always in touch</h2>
          <p className={styles.details}>
            Our support service works around the clock. We resolve customer issues quickly and clearly.
          </p>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <ButtonLink
                href="/change-me"
                text="Write to Telegram"
                color="light-blue"
                Icon={TelegramIcon}
                iconProps={{ width: 30, height: 30 }}
                withoutPaddings
              />
            </div>
            <div className={styles.button}>
              <ButtonLink
                href="/change-me"
                text="Write to E-mail"
                color="orange"
                Icon={MailIcon}
                iconProps={{ width: 30, height: 30 }}
                withoutPaddings
              />
            </div>
          </div>
        </div>
        <div className={styles.backdrop}>
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <FoxSupportAnimation />
              {/* <LazyLottie getJson={() => import('@/shared/assets/animations/support-fox.json')} id="support-fox" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SupportSection };
