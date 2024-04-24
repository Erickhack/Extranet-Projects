import styles from './Badge.module.scss';

type Props = {
  title?: string;
  details?: string;
};

function Badge({ title = '', details = '' }: Props) {
  return (
    <div className={styles.root}>
      <p className={styles.title}>{title}</p>
      <p className={styles.details}>{details}</p>
    </div>
  );
}

export { Badge };
