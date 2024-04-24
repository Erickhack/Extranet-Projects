/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React, { useState } from 'react';

import cn from 'classnames';
import styles from './FAQSection.module.scss';

export function FAQSection() {
  const [faqs] = useState([
    {
      id: 1,
      question: 'What is WOWMAX?',
      answers:
        'WOWMAX is a multi-chain decentralized exchange (DEX) aggregator, renowned for its innovative liquidity aggregation approach, offering unparalleled exchange rates in the DeFi sector.',
    },
    {
      id: 2,
      question: 'How does WOWMAX achieve the best exchange rates?',
      answers:
        'WOWMAX is a multi-chain decentralized exchange (DEX) aggregator, renowned for its innovative liquidity aggregation approach, offering unparalleled exchange rates in the DeFi sector.',
    },
    {
      id: 3,
      question: 'What makes WOWMAX unique compared to other DEX aggregators?',
      answers:
        'WOWMAX is a multi-chain decentralized exchange (DEX) aggregator, renowned for its innovative liquidity aggregation approach, offering unparalleled exchange rates in the DeFi sector.',
    },
    {
      id: 4,
      question: 'How does WOWMAX ensure security for its users?',
      answers:
        'WOWMAX is a multi-chain decentralized exchange (DEX) aggregator, renowned for its innovative liquidity aggregation approach, offering unparalleled exchange rates in the DeFi sector.',
    },
    {
      id: 5,
      question: 'Which blockchain networks does WOWMAX support?',
      answers:
        'WOWMAX is a multi-chain decentralized exchange (DEX) aggregator, renowned for its innovative liquidity aggregation approach, offering unparalleled exchange rates in the DeFi sector.',
    },
    {
      id: 6,
      question: 'Can I use WOWMAX with any cryptocurrency wallet?',
      answers:
        'WOWMAX is a multi-chain decentralized exchange (DEX) aggregator, renowned for its innovative liquidity aggregation approach, offering unparalleled exchange rates in the DeFi sector.',
    },
  ]);

  const [toggler, setToggler] = useState<number | null>(null);

  const onToggle = (id: number | null) => {
    setToggler(id);
  };

  return (
    <div className={styles.faq_section}>
      <div className={styles.contain}>
        <div className={styles.title}>
          <h1>Frequently Asked Questions</h1>
        </div>
        <ul className={styles.questions}>
          {faqs.map((faq) => (
            <li
              key={faq.id}
              className={cn(styles.question, toggler === faq.id && styles.action)}
              onClick={() => {
                onToggle(toggler !== faq.id ? faq.id : null);
              }}
            >
              <div>
                <span>{faq.question}</span>
                <button
                  type="button"
                  onClick={() => {
                    onToggle(toggler !== faq.id ? faq.id : null);
                  }}
                >
                  <div />
                  <div />
                </button>
              </div>

              <div>
                <span>{faq.answers}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
