import { ReactNode } from 'react';

import styles from './List.module.scss';

type Props = {
  list: { id: string; item: ReactNode }[];
};

function List({ list }: Props) {
  return (
    <ul className={styles.root}>
      {list.map(({ id, item }) => (
        <li className={styles.item} key={id}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export { List };
