/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';
import cn from 'classnames';

import { ArrowUpRightIcon, BestPriceIcon, Button, ButtonLink, Carousel } from '@/shared/components';
// import { LazyLottie } from '@/shared/components/Lottie';
import { useScrollTrigger } from '@/shared/hooks';
import allDexLiquidity from '@/shared/assets/images/best-price/AllDEXLiquidity.png';
import bestPrice from '@/shared/assets/images/best-price/BestPrice.png';
import bestSwapRouting from '@/shared/assets/images/best-price/BestSwapRouting.png';
import gasMinimization from '@/shared/assets/images/best-price/GasMinimization.png';
import privateLiquidity from '@/shared/assets/images/best-price/PrivateLiquidity.png';
import slippageArbitrage from '@/shared/assets/images/best-price/SlippageArbitrage.png';
import swapProtection from '@/shared/assets/images/best-price/SwapProtection.png';

import styles from './BestPriceSection.module.scss';
import { CardAssetID } from './types';
import { column1, column2 } from './constants';

const images = {
  'best-price': bestPrice,
  'best-swap-routing': bestSwapRouting,
  'all-dex-liquidity': allDexLiquidity,
  'swap-protection': swapProtection,
  'private-liquidity': privateLiquidity,
  'slippage-arbitrage': slippageArbitrage,
  'gas-minimization': gasMinimization,
};

const titles = {
  'best-price': 'Best Price',
} as Record<CardAssetID, string>;

[...column1, ...column2].forEach((c) => {
  titles[c.id] = c.text;
});

const DEFAULT_ID = 'best-price';

function BestPriceSection() {
  const [assetIDs, setAssetIDs] = useState<{ prev: CardAssetID; cur: CardAssetID }>({
    prev: 'all-dex-liquidity',
    cur: DEFAULT_ID,
  });
  const [cardTranslateYs, setCardTranslateYs] = useState([100, 0]);
  const ref = useScrollTrigger(styles.animate);

  const defineCardImageID = (index: number) => (!cardTranslateYs[index] ? assetIDs.cur : assetIDs.prev);

  const handleCardButtonPointerEnter = (assetID: CardAssetID) => {
    setAssetIDs(({ cur }) => ({ prev: cur, cur: assetID }));
    setCardTranslateYs(([top, down]) => [down, top]);
  };
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.contentWrapper}>
        <div className={styles.contentTop}>
          <div className={styles.headerButton}>
            <ButtonLink href="/change-me" theme="bordered" text="Best Price" color="white" Icon={BestPriceIcon} />
          </div>
          <h2 className={styles.title}>
            <span className={styles.titleRowWrapper}>
              <span className={styles.titleRowText}>WOWMAX&#8217;s break through </span>
            </span>
            <span className={styles.titleRowWrapper}>
              <span className={styles.titleRowText}>liquidity aggregation </span>
            </span>
            <span className={styles.titleRowWrapper}>
              <span className={styles.titleRowText}>algorithm</span>
            </span>
          </h2>
          <h2 className={cn(styles.title, styles.title_adaptive)}>
            <span className={styles.titleRowWrapper}>
              <span className={styles.titleRowText}>WOWMAX&#8217;s break </span>
            </span>
            <span className={styles.titleRowWrapper}>
              <span className={styles.titleRowText}>through liquidity </span>
            </span>
            <span className={styles.titleRowWrapper}>
              <span className={styles.titleRowText}>aggregation </span>
            </span>
            <span className={styles.titleRowWrapper}>
              <span className={styles.titleRowText}>algorithm</span>
            </span>
          </h2>
          <p className={styles.details}>offers exchange rates unmatched by any competitor.</p>
          <div
            className={styles.grid}
            onMouseLeave={() => {
              handleCardButtonPointerEnter(DEFAULT_ID);
            }}
          >
            <div className={styles.column}>
              {column1.map(({ id, text }) => (
                <div key={id} className={styles.columnButton}>
                  <Button
                    text={text}
                    color="white"
                    size="large"
                    onPointerEnter={() => handleCardButtonPointerEnter(id)}
                  />
                </div>
              ))}
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>{titles[assetIDs.cur]}</p>
              <div className={styles.cardImagesWrapper}>
                <div className={styles.cardImage} style={{ transform: `translateY(${cardTranslateYs[0]}%)` }}>
                  {/* <LazyLottie
                    getJson={() => import(`@/shared/assets/animations/${defineCardImageID(0)}.json`)}
                    id={defineCardImageID(0)}
                  /> */}
                  <img src={images[defineCardImageID(0)].src} alt="WOWMAX" width={400} height={290} />
                </div>
                <div className={styles.cardImage} style={{ transform: `translateY(${cardTranslateYs[1]}%)` }}>
                  {/* <LazyLottie
                    getJson={() => import(`@/shared/assets/animations/${defineCardImageID(1)}.json`)}
                    id={defineCardImageID(1)}
                  /> */}
                  <img src={images[defineCardImageID(1)].src} alt="WOWMAX" width={400} height={290} />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              {column2.map(({ id, text }) => (
                <div key={id} className={styles.columnButton}>
                  <Button
                    text={text}
                    color="white"
                    size="large"
                    onPointerEnter={() => handleCardButtonPointerEnter(id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <Carousel
            list={[...column1, ...column2].map(({ id, text }) => ({
              id,
              item: <Button text={text} color="white" size="large" onClick={() => handleCardButtonPointerEnter(id)} />,
            }))}
            paddings="20px"
            slideWidth="max-content"
            spaceBetween={4}
            slidesPerView="auto"
            freeMode={{ momentum: false }}
            touchStartForcePreventDefault
            touchReleaseOnEdges
          />
        </div>
        <div className={styles.contentBottom}>
          <div className={styles.footerButton}>
            <ButtonLink href="/change-me" text="Check rates" color="green" Icon={ArrowUpRightIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { BestPriceSection };
