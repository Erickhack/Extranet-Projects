'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { ArrowUpRightIcon, BurgerIcon, CrossIcon } from '../../svg';
import { Portal } from '../../Portal';
import { Link } from '../../Link';
import { Logo } from '../../Logo';
import { ButtonLink } from '../../Button';
import { NavLinks } from '../../NavLinks';
import { logoLink, navLinks } from '../constants';
import styles from './Burger.module.scss';

function Burger() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className={styles.button} type="button" onClick={() => setShow(true)}>
        <BurgerIcon />
      </button>
      {show && (
        <Portal>
          <RemoveScroll>
            <div className={styles.drawerWrapper}>
              <div className={styles.drawerContainer}>
                <div className={styles.drawer}>
                  <div className={styles.header}>
                    <Link href={logoLink.href} title={logoLink.title} isInternal onClick={() => setShow(false)}>
                      <Logo />
                    </Link>
                    <button className={styles.button} type="button" onClick={() => setShow(false)}>
                      <CrossIcon />
                    </button>
                  </div>
                  <nav className={styles.nav}>
                    <NavLinks links={navLinks} />
                  </nav>
                  <div className={styles.footer}>
                    <ButtonLink href="/change-me" text="Start trading" Icon={ArrowUpRightIcon} />
                  </div>
                </div>
              </div>
            </div>
          </RemoveScroll>
        </Portal>
      )}
    </>
  );
}

export { Burger };
