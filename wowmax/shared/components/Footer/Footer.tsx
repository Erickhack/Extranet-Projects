import styles from './Footer.module.scss';
import { ButtonLink } from '../Button';
import {
  ArrowUpRightIcon,
  NewsIcon,
  SocDBIcon,
  SocDiscordIcon,
  SocMirrorIcon,
  SocTelegramIcon,
  SocTwitterIcon,
} from '../svg';
import { Link, TextLink } from '../Link';

function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.linksContainer}>
            <div className={styles.nav}>
              <div className={styles.column}>
                <p className={styles.title}>General</p>
                <TextLink href="/change-me" text="About us" />
                <TextLink href="/change-me" text="API" />
                <TextLink href="/change-me" text="WOWMAX Token" />
                <TextLink href="/change-me" text="FAQ" />
                <TextLink href="/change-me" text="Join Us" />
                <TextLink href="/change-me" text="Support" />
              </div>
              <div className={styles.column}>
                <p className={styles.title}>Legal</p>
                <TextLink href="/change-me" text="Terms of use" />
                <TextLink href="/change-me" text="Privacy policy" />
                <TextLink href="/change-me" text="Disclaimer" />
              </div>
              <div className={styles.column}>
                <p className={styles.title}>Developers</p>
                <TextLink href="/change-me" text="Documentation" />
                <TextLink href="/change-me" text="GitHub" />
                <TextLink href="/change-me" text="Audit" />
              </div>
            </div>
            <div className={styles.socials}>
              <p className={styles.title}>Social Media</p>
              <div className={styles.socialsLinks}>
                <Link href="/change-me">
                  <div className={styles.socialsLink}>
                    <SocMirrorIcon className={styles.icon_mirror} />
                  </div>
                </Link>
                <Link href="/change-me">
                  <div className={styles.socialsLink}>
                    <SocTwitterIcon className={styles.icon_twitter} />
                  </div>
                </Link>
                <Link href="/change-me">
                  <div className={styles.socialsLink}>
                    <SocDiscordIcon className={styles.icon_discord} />
                  </div>
                </Link>
                <Link href="/change-me">
                  <div className={styles.socialsLink}>
                    <SocTelegramIcon className={styles.icon_telegram} />
                  </div>
                </Link>
                <Link href="/change-me">
                  <div className={styles.socialsLink}>
                    <SocDBIcon className={styles.icon_db} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeaderButton}>
              <ButtonLink href="/change-me" text="News" Icon={NewsIcon} theme="bordered" />
            </div>
            <p className={styles.cardTitle}>Subscribe to&nbsp;WOWMAX newsletter</p>
            <p className={styles.cardDetails}>The latest news and updates</p>
            <div className={styles.cardFooterButton}>
              <ButtonLink href="/change-me" text="Subscribe" Icon={ArrowUpRightIcon} />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.footerText}>Address: Unit 2A, 17/F, Glenealy Tower,No.1 Glenealy, Central, Hong Kong</p>
          <p className={styles.footerText}>WOWMAX Limited</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
