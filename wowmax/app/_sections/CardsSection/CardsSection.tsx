'use client';

import cn from 'classnames';

import { Badge, Card, CardBGCrypto, CardBGCube, CardBGGas, CardBGMoney, Carousel } from '@/shared/components';
import { LazyLottie } from '@/shared/components/Lottie';
import { useScrollTrigger } from '@/shared/hooks';

import styles from './CardsSection.module.scss';

function CardsSection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.carousel}>
        <Carousel
          slidesPerView="auto"
          slideWidth="max-content"
          centerInsufficientSlides
          navigation
          paddings="var(--container-paddings-current)"
          list={[
            {
              id: '1',
              item: (
                <div className={styles.cardWrapper}>
                  <div className={cn(styles.card, styles.card_1)}>
                    <Card
                      contentSlot={<Badge title="95.8%" details="first-time users become loyal clients" />}
                      backdropSlot={
                        <div className={styles.imageWrapper}>
                          <div className={styles.image}>
                            <LazyLottie
                              getJson={() => import('@/shared/assets/animations/astronaut.json')}
                              id="astronaut"
                            />
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              ),
            },
            {
              id: '2',
              item: (
                <div className={styles.cardWrapper}>
                  <div className={cn(styles.card, styles.card_2)}>
                    <Card
                      color="green"
                      title="Returns arbitrage profit"
                      details="extracted from the price impact back to traders"
                      BGPic={CardBGMoney}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: '3',
              item: (
                <div className={styles.cardWrapper}>
                  <div className={cn(styles.card, styles.card_3)}>
                    <Card
                      color="purple"
                      title="Splits exchanged amounts"
                      details="into smaller parts to minimize price impact"
                      BGPic={CardBGCube}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: '4',
              item: (
                <div className={styles.cardWrapper}>
                  <div className={cn(styles.card, styles.card_4)}>
                    <Card
                      color="orange"
                      title="Performs transaction simulations"
                      details="to ensure successful trades"
                      BGPic={CardBGCrypto}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: '5',
              item: (
                <div className={styles.cardWrapper}>
                  <div className={cn(styles.card, styles.card_5)}>
                    <Card
                      color="red"
                      title={
                        <>
                          <span className={styles.bigScreenText}>Takes the best exchange route</span>
                          <span className={styles.smallScreenText}>Returns arbitrage profit </span>
                        </>
                      }
                      details="taking into account gas costs"
                      BGPic={CardBGGas}
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export { CardsSection };
