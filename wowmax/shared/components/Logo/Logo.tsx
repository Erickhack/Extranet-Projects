import { WowMaxLogo, WowMaxLogoGradient } from '../svg';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <div className={styles.root}>
      <WowMaxLogo />
      <WowMaxLogoGradient />
    </div>
  );
}

export { Logo };
