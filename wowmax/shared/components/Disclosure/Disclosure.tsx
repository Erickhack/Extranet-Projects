'use client';

import { PropsWithChildren, useState } from 'react';
import cn from 'classnames';

import { ArrowDownIcon } from '../svg';
import styles from './Disclosure.module.scss';

type Props = PropsWithChildren<{
  closedHeight: string;
}>;

function Disclosure({ children, closedHeight }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn(styles.root, { [styles.open]: open })}>
      <div className={styles.container} style={{ height: !open ? closedHeight : 'max-content' }}>
        {children}
      </div>
      <button className={styles.button} type="button" onClick={() => setOpen(!open)}>
        <span>{!open ? 'Show more' : 'Roll up'}</span>
        <span className={styles.buttonIcon}>
          <ArrowDownIcon width={13} height={12} />
        </span>
      </button>
    </div>
  );
}

export { Disclosure };
