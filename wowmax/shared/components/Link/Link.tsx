import { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

import styles from './Link.module.scss';

type Props = PropsWithChildren<{
  href: string;
  title?: string;
  isInternal?: boolean;
  isTextBased?: boolean;
  onClick?: () => void;
}>;

function Link({ children, href, title = '', isInternal = false, isTextBased = false, onClick }: Props) {
  const classNames = cn(styles.root, { [styles.textBased]: isTextBased });

  return isInternal ? (
    <NextLink className={classNames} href={href} title={title} onClick={onClick}>
      {children}
    </NextLink>
  ) : (
    <a className={classNames} href={href} title={title} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
    </a>
  );
}

export { Link };
