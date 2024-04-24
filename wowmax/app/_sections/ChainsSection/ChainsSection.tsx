'use client';

import cn from 'classnames';

import { useScrollTrigger } from '@/shared/hooks';
import { ButtonLink, ChainsIcon } from '@/shared/components';

import Image from 'next/image';
import styles from './ChainsSection.module.scss';
import { chains } from './constants';

function ChainsSection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.content}>
        <div className={styles.button}>
          <ButtonLink href="/change-me" theme="bordered" text="Chains" Icon={ChainsIcon} />
        </div>
        <h2 className={styles.title}>Exchange your tokens at the best rates on 10 chains</h2>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            {chains.map(({ id, title, href, isSoon }) => (
              <a
                key={id}
                className={cn(styles.card, { [styles.soon]: isSoon })}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.cardLogo}
                  src={`/images/chains/${id}.png`}
                  width={200}
                  height={200}
                  alt={title}
                />
                <p className={styles.cardTitle}>{title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ChainsSection };
