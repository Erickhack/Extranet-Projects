/* eslint-disable jsx-a11y/mouse-events-have-key-events */

'use client';

import {
  ButtonLink,
  CardBitKeep,
  CardBurito,
  CardGate,
  CardMetaMask,
  CardOKX,
  CardWalletConnect,
  WalletIcon,
  WowMaxLogoGradient,
} from '@/shared/components';
import React, { useState } from 'react';

import styles from './WalletsSection.module.scss';

function ActionLinerGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1={516} y1="130.961" x2={516} y2="0.960938" gradientUnits="userSpaceOnUse">
      <stop stopColor="#141415" stopOpacity={0} />
      <stop offset="0.505" stopColor="#852EFF" />
      <stop offset={1} stopColor="#141415" stopOpacity={0} />
    </linearGradient>
  );
}

function LinesCard({ activeId }: { activeId: string }) {
  return (
    <svg width={932} height={130} viewBox="0 0 932 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.5 2.02656e-06V46.9785C0.5 64.6516 14.8269 78.9785 32.5 78.9785H401.5C419.173 78.9785 433.5 93.3054 433.5 110.978V130"
        stroke="url(#paint0_linear_203_23558)"
      />
      <path
        d="M931.5 2.02656e-06V46.9785C931.5 64.6516 917.173 78.9785 899.5 78.9785H530.5C512.827 78.9785 498.5 93.3054 498.5 110.978V130"
        stroke="url(#paint1_linear_203_23558)"
      />
      <path
        d="M186 2.02656e-06V33C186 50.6731 200.327 65 218 65H415C432.673 65 447 79.3269 447 97V130"
        stroke="url(#paint2_linear_203_23558)"
      />
      <path
        d="M746 2.02656e-06V33C746 50.6731 731.673 65 714 65H517C499.327 65 485 79.3269 485 97V130"
        stroke="url(#paint3_linear_203_23558)"
      />
      <path
        d="M373 2.02656e-06V19.0215C373 36.6946 387.327 51.0215 405 51.0215H427C444.673 51.0215 459 65.3484 459 83.0215V130"
        stroke="url(#paint4_linear_203_23558)"
      />
      <path
        d="M559 2.02656e-06V19.0215C559 36.6946 544.673 51.0215 527 51.0215H505C487.327 51.0215 473 65.3484 473 83.0215V130"
        stroke="url(#paint5_linear_203_23558)"
      />
      <defs>
        {activeId === 'paint0_linear_203_23558' ? (
          <ActionLinerGradient id="paint0_linear_203_23558" />
        ) : (
          <linearGradient
            id="paint0_linear_203_23558"
            x1={-18}
            y1="-41.2366"
            x2="449.138"
            y2="49.4333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0} />
            <stop offset="0.45" stopColor="white" stopOpacity="0.59" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        )}
        {activeId === 'paint1_linear_203_23558' ? (
          <ActionLinerGradient id="paint1_linear_203_23558" />
        ) : (
          <linearGradient
            id="paint1_linear_203_23558"
            x1={950}
            y1="-41.2366"
            x2="482.862"
            y2="49.4333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0} />
            <stop offset="0.45" stopColor="white" stopOpacity="0.59" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        )}
        {activeId === 'paint2_linear_203_23558' ? (
          <ActionLinerGradient id="paint2_linear_203_23558" />
        ) : (
          <linearGradient
            id="paint2_linear_203_23558"
            x1="174.849"
            y1="-41.2366"
            x2="463.089"
            y2="-7.5137"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0} />
            <stop offset="0.45" stopColor="white" stopOpacity="0.59" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        )}
        {activeId === 'paint3_linear_203_23558' ? (
          <ActionLinerGradient id="paint3_linear_203_23558" />
        ) : (
          <linearGradient
            id="paint3_linear_203_23558"
            x1="757.151"
            y1="-41.2366"
            x2="468.911"
            y2="-7.5137"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0} />
            <stop offset="0.45" stopColor="white" stopOpacity="0.59" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        )}
        {activeId === 'paint4_linear_203_23558' ? (
          <ActionLinerGradient id="paint4_linear_203_23558" />
        ) : (
          <linearGradient
            id="paint4_linear_203_23558"
            x1="369.326"
            y1="-41.2366"
            x2="465.458"
            y2="-37.5306"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0} />
            <stop offset="0.45" stopColor="white" stopOpacity="0.59" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        )}
        {activeId === 'paint5_linear_203_23558' ? (
          <ActionLinerGradient id="paint5_linear_203_23558" />
        ) : (
          <linearGradient
            id="paint5_linear_203_23558"
            x1="562.674"
            y1="-41.2366"
            x2="466.542"
            y2="-37.5306"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0} />
            <stop offset="0.45" stopColor="white" stopOpacity="0.59" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        )}
      </defs>
    </svg>
  );
}

export function WalletsSection() {
  const [hoverLineGradient, setHoverLineGradient] = useState<string>('');

  const onHover = (id: string | null) => {
    setHoverLineGradient(id || '');
  };

  const cards = [
    { id: 'paint0_linear_203_23558', title: 'Metamask', icon: CardMetaMask },
    { id: 'paint2_linear_203_23558', title: 'Burrito', icon: CardBurito },
    {
      id: 'paint4_linear_203_23558',
      title: 'Wallet Connect',
      icon: CardWalletConnect,
    },
    { id: 'paint5_linear_203_23558', title: 'OKX', icon: CardOKX },
    { id: 'paint3_linear_203_23558', title: 'Gate', icon: CardGate },
    { id: 'paint1_linear_203_23558', title: 'BitKeep', icon: CardBitKeep },
  ];

  return (
    <div className={styles.wallets_section}>
      <div className={styles.wallets_contain}>
        <div>
          <ButtonLink href="/" text="wallets" Icon={WalletIcon} color="blue" theme="bordered" />
        </div>
        <div className={styles.wallets_title}>
          <h1>Connect your favorite Web3 wallet to swap</h1>
        </div>
        <div className={styles.objects}>
          <div className={styles.cards}>
            {cards.map((card) => (
              <div
                key={card.id}
                onMouseOver={() => {
                  onHover(card.id);
                }}
                onMouseOut={() => {
                  onHover(null);
                }}
              >
                <div>
                  <card.icon />
                </div>
                <span>{card.title}</span>
              </div>
            ))}
          </div>
          <div className={styles.lines}>
            <LinesCard activeId={hoverLineGradient} />
          </div>
          <div className={styles.logo_icon}>
            <WowMaxLogoGradient />
          </div>
        </div>
      </div>
      <div className={styles.wallets_bg}>
        <div>
          <div />
          <div />
        </div>
        <div className={styles.ellips} />
        <div className={styles.filter_left} />
        <div className={styles.filter_right} />
      </div>
    </div>
  );
}
