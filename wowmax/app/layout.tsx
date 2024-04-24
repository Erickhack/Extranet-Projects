import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Footer, Header } from '@/shared/components';

import './globals.scss';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Wowswap',
  description: 'Wowswap',
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
