'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Portal({ children }: PropsWithChildren) {
  const [container] = useState(() => (typeof window === 'object' ? document.createElement('div') : null));

  useEffect(() => {
    if (container === null) return;
    document.body.appendChild(container);
    // eslint-disable-next-line consistent-return
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return container !== null ? ReactDOM.createPortal(children, container) : null;
}

export { Portal };
