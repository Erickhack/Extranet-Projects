'use client';

import {
  ApiIcon,
  ButtonLink,
  RoboHand1,
  RoboHand2,
  CardBgAPI,
  CardBgDoc,
  CardBgGit,
  ArrowUpRightIcon,
} from '@/shared/components';
import { useScrollTrigger } from '@/shared/hooks';
import cn from 'classnames';
import styles from './BuildSection.module.scss';

export function BuildSection() {
  const cards = [
    {
      id: 1,
      title: 'Documents',
      description: 'Explore comprehensive guides to integrate and leverage WOWMAX technology',
      bgColor: '#0CAB5E',
      Svg: CardBgDoc,
    },
    {
      id: 2,
      title: 'API',
      description: 'Access our powerful API for seamless DEX aggregator integration and support',
      bgColor: '#0082FB',
      Svg: CardBgAPI,
    },
    {
      id: 3,
      title: 'GitHub',
      description: 'Collaborate and innovate using WOWMAX’s GitHub repositories for developers',
      bgColor: '#852EFF',
      Svg: CardBgGit,
    },
  ];

  const ref = useScrollTrigger(styles.animate);

  return (
    <div className={styles.build_section} ref={ref}>
      <div className={styles.build_section_contain}>
        <div id="left" className={styles.build_corner_left}>
          <RoboHand1 />
        </div>
        <div id="right" className={styles.build_corner_right}>
          <RoboHand2 />
        </div>
        <div className={styles.build_main}>
          <div>
            <ButtonLink href="/" text="API" Icon={ApiIcon} color="blue" theme="bordered" />
          </div>

          <div className={styles.build_main_title}>
            <h1 className={styles.build_main_title_h1}>Build with WOWMAX</h1>
            <p className={styles.build_main_title_p}>
              Build DeFi apps and exchange services on the most efficient liquidity aggregation protocol.
            </p>
          </div>

          <div className={styles.build_main_cards_contain}>
            {cards.map((card) => (
              <div
                key={`${card.id}`}
                className={cn(styles.build_main_card, styles[`build_main_card_${card.id}`])}
                style={{
                  backgroundColor: card.bgColor,
                }}
              >
                <div className={styles.build_main_card_arrowNav}>
                  <ArrowUpRightIcon />
                  <ArrowUpRightIcon />
                </div>

                <div className={styles.build_main_card_title}>
                  <h2 className={styles.build_main_card_h2}>{card.title}</h2>
                  <p>{card.description}</p>
                </div>

                <div className={styles.build_main_card_svg}>
                  <card.Svg />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.build_main_footer}>
            <p className={styles.build_main_footer_p}>
              Access the best exchange rates and the whole liquidity market with WOWMAX API to jump start your
              decentralized exchange service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
