/* eslint-disable react/jsx-props-no-spreading */

import type { Props as ButtonProps } from './Button';
import { ButtonSlot } from './ButtonSlot';
import { getTargetClassNames } from './utils';

type Props = ButtonProps & {
  href: string;
};

function ButtonLink({ text, href, title = '', onPointerEnter, onClick, ...props }: Props) {
  return (
    <a
      className={getTargetClassNames(props)}
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      onPointerEnter={onPointerEnter}
      onClick={onClick}
    >
      <ButtonSlot {...props}>{text}</ButtonSlot>
    </a>
  );
}

export { ButtonLink };
