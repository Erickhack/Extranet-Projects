import { ReactNode } from 'react';
import { List } from './List';

import styles from './Ticker.module.scss';

type Props = {
  list: { id: string; item: ReactNode }[];
  direction?: 'left' | 'right';
  tickerItemCount?: number;
  duration?: number;
};

function Ticker({ list, direction = 'left', tickerItemCount = 2, duration = 40 }: Props) {
  const tickerKeys = Array.from({ length: tickerItemCount }, (_, i) => i);
  const translateX = 100 / tickerItemCount;
  return (
    <div className={styles.root} style={{ justifyContent: direction === 'left' ? 'flex-start' : 'flex-end' }}>
      <div
        className={styles.ticker}
        style={{
          transform: `translateX(${direction === 'left' ? '-' : ''}${translateX}%)`,
          animationDuration: `${duration}s`,
        }}
      >
        {tickerKeys.map((key) => (
          <div className={styles.tickerItem} key={key}>
            <List list={list} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Ticker };
