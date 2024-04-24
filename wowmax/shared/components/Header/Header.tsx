import { NavLinks } from '../NavLinks';
import { Logo } from '../Logo';
import { ButtonLink } from '../Button';
import { Link } from '../Link';
import { launchLink, logoLink, navLinks } from './constants';
import styles from './Header.module.scss';
import { Burger } from './Burger';

function Header() {
  return (
    <div className={styles.root}>
      <Link href={logoLink.href} title={logoLink.title} isInternal>
        <Logo />
      </Link>
      <nav className={styles.nav}>
        <NavLinks links={navLinks} />
      </nav>
      <div className={styles.button}>
        <ButtonLink text={launchLink.text} href={launchLink.href} title={launchLink.title} size="small" />
      </div>
      <div className={styles.burger}>
        <Burger />
      </div>
    </div>
  );
}

export { Header };
