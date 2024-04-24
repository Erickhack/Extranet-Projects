'use client';

import {
  ArrowUpRightIcon,
  ButtonLink,
  DefiIcon,
  DefiRecBig,
  DefiRecMedium,
  DefiRecSmall,
  DefiRecSmallest,
} from '@/shared/components';

import React from 'react';

import { useScrollTrigger } from '@/shared/hooks';
import { LazyLottie } from '@/shared/components/Lottie';

import styles from './DefiSection.module.scss';

export function DefiSection() {
  const ref = useScrollTrigger(styles.animate);

  return (
    <div className={styles.defi_section} ref={ref}>
      <div className={styles.defi_section_contain}>
        <div>
          <ButtonLink href="/" text="DEFI" theme="bordered" color="lime" Icon={DefiIcon} />
        </div>
        <div className={styles.defi_title}>
          <h1>WOWMAX token (DEFI)</h1>
          <p>An ERC-20 token that gives stakes discounts on fees and the right to participate in WOWMAX governance.</p>
        </div>
        <div className={styles.defi_action}>
          <ButtonLink href="/" text="Learn More" Icon={ArrowUpRightIcon} />
        </div>
      </div>
      <div className={styles.defi_bg_animation}>
        <div>
          <div>
            <div className={styles.defi_first_half}>
              <DefiRecSmall />
            </div>
            <div className={styles.defi_second_half}>
              <DefiRecMedium />
            </div>
          </div>
          <div>
            <div className={styles.defi_second_half}>
              <DefiRecSmallest />
            </div>
            <div className={styles.defi_first_half}>
              <DefiRecBig />
            </div>
          </div>
        </div>
        <div>
          <LazyLottie getJson={() => import('@/shared/assets/animations/defi-bg-mobi.json')} id="defi-bg-mobi" />
        </div>
        <div className={styles.lef_filter} />
        <div className={styles.right_filter} />
        <div className={styles.bottom_filter} />
      </div>
    </div>
  );
}
