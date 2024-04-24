/* eslint-disable react/jsx-props-no-spreading */

import { PropsWithChildren } from 'react';

import type { Props as ButtonProps } from './Button';
import { getBaseClassNames } from './utils';
import styles from './Button.module.scss';

type Props = PropsWithChildren<Pick<ButtonProps, 'theme' | 'color' | 'size' | 'Icon' | 'iconProps'>>;

function ButtonSlot({ children, theme = 'filled', Icon = null, iconProps, ...props }: Props) {
  return Icon ? (
    <>
      {theme === 'filled' && (
        <>
          <span className={getBaseClassNames({ theme, ...props })}>{children}</span>
          <span className={getBaseClassNames({ theme, Icon, ...props })}>
            <Icon width={22} height={22} {...iconProps} />
          </span>
        </>
      )}
      {theme === 'bordered' && (
        <span className={getBaseClassNames({ theme, ...props })}>
          <span className={styles.innerWrapper}>
            <Icon className={styles.icon} {...iconProps} />
            {children}
          </span>
        </span>
      )}
    </>
  ) : (
    children
  );
}

export { ButtonSlot };
