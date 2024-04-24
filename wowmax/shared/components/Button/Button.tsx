/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';

import type { Icon as IconComponent } from '@/shared/types';

import { ButtonLink } from './ButtonLink';
import { getTargetClassNames } from './utils';
import { ButtonSlot } from './ButtonSlot';

type Props = {
  text: string;
  href?: string;
  title?: string;
  theme?: 'filled' | 'bordered';
  color?: 'blue' | 'white' | 'lime' | 'yellow' | 'light-blue' | 'orange' | 'green';
  size?: 'small' | 'normal' | 'large';
  Icon?: IconComponent | null;
  iconProps?: ComponentProps<IconComponent>;
  withoutPaddings?: boolean;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onClick?: () => void;
};

function Button({ text, href = '', title = '', onPointerEnter, onPointerLeave, onClick, ...props }: Props) {
  return href ? (
    <ButtonLink text={text} href={href} title={title} onPointerEnter={onPointerEnter} onClick={onClick} {...props} />
  ) : (
    <button
      className={getTargetClassNames(props)}
      title={title}
      type="button"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <ButtonSlot {...props}>{text}</ButtonSlot>
    </button>
  );
}

export type { Props };
export { Button };
