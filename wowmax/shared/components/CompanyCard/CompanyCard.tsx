import cn from 'classnames';
import { ReactNode } from 'react';

import { Icon } from '@/shared/types';

import { ArrowUpRightIcon } from '../svg';
import styles from './CompanyCard.module.scss';

type Props = {
  title: string;
  details: string;
  Logo?: Icon | null;
  logoSlot?: ReactNode | null;
  hoverColor?: 'blue' | 'purple';
  align?: 'center' | 'left';
};

function CompanyCard({ title, details, Logo = null, logoSlot = null, hoverColor = 'blue', align = 'center' }: Props) {
  return (
    <div className={cn(styles.root, styles[`hover-color_${hoverColor}`], { [styles.alignLeft]: align === 'left' })}>
      <div className={styles.button}>
        <div className={styles.icon}>
          <ArrowUpRightIcon width={15} height={15} />
        </div>
        <div className={styles.icon}>
          <ArrowUpRightIcon width={15} height={15} />
        </div>
      </div>
      {(Logo || logoSlot) && <div className={styles.logo}>{Logo ? <Logo /> : logoSlot}</div>}
      <p className={styles.title}>{title}</p>
      <p className={styles.details}>{details}</p>
    </div>
  );
}

export { CompanyCard };
