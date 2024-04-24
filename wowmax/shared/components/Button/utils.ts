import cn from 'classnames';

import type { Props as ButtonProps } from './Button';
import styles from './Button.module.scss';

function getBaseClassNames({
  theme = 'filled',
  color = 'blue',
  size = 'normal',
  Icon = null,
  withoutPaddings = false,
}: Pick<ButtonProps, 'theme' | 'color' | 'size' | 'Icon' | 'withoutPaddings'>) {
  return cn(styles.base, [styles[`color_${color}`]], {
    [styles.filled]: theme === 'filled',
    [styles.bordered]: theme === 'bordered',
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
    [styles.withIcon]: !!Icon,
    [styles.withoutPaddings]: withoutPaddings,
  });
}

function getTargetClassNames({
  Icon = null,
  ...props
}: Pick<ButtonProps, 'theme' | 'color' | 'size' | 'Icon' | 'withoutPaddings'>) {
  return cn(styles.target, !Icon ? getBaseClassNames({ Icon, ...props }) : styles.row);
}

export { getTargetClassNames, getBaseClassNames };
