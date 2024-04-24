import { ReactNode } from 'react';
import cn from 'classnames';

import { Icon } from '@/shared/types';

import styles from './Card.module.scss';

type Props = {
  title?: ReactNode;
  details?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  BGPic?: Icon | null;
  contentSlot?: ReactNode | null;
  backdropSlot?: ReactNode | null;
};

function Card({
  title = '',
  details = '',
  color = 'blue',
  BGPic = null,
  contentSlot = null,
  backdropSlot = null,
}: Props) {
  return (
    <div className={cn(styles.root, styles[`${color}Color`])}>
      {backdropSlot && <div className={styles.backdropSlot}>{backdropSlot}</div>}
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.details}>{details}</p>
        {contentSlot && <div className={styles.contentSlot}>{contentSlot}</div>}
      </div>
      {BGPic && <BGPic className={styles.bgPic} />}
    </div>
  );
}

export { Card };
