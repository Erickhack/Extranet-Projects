import type { TextLink as TextLinkProps } from '@/shared/types';

import { TextLink } from '../Link';
import styles from './NavLinks.module.scss';

type Props = {
  links: (TextLinkProps & { id: string })[];
};

function NavLinks({ links }: Props) {
  return (
    <div className={styles.root}>
      {links.map(({ id, href, text, title }) => (
        <TextLink key={id} href={href} text={text} title={title} />
      ))}
    </div>
  );
}

export { NavLinks };
