'use client';

import Image from 'next/image';

import { useScrollTrigger } from '@/shared/hooks';
import { ButtonLink, CompanyCard, Disclosure, Link, PartnershipIcon, Ticker } from '@/shared/components';

import styles from './PartnershipSection.module.scss';
import { partnershipList1, partnershipList2 } from './constants';

function PartnershipSection() {
  const ref = useScrollTrigger(styles.animate);
  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.button}>
        <ButtonLink href="/change-me" theme="bordered" text="Partnership" Icon={PartnershipIcon} />
      </div>
      <h2 className={styles.title}>Partners and stakeholders</h2>
      <div className={styles.disclosure}>
        <Disclosure closedHeight="904px">
          <div className={styles.list}>
            {[...partnershipList1, ...partnershipList2].map(({ id, href, title, details }) => (
              <div key={id} className={styles.card}>
                <Link href={href}>
                  <CompanyCard
                    logoSlot={
                      <Image src={`/images/partnership-logos/${id}.png`} width={492} height={160} alt={title} />
                    }
                    title={title}
                    details={details}
                    align="left"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Disclosure>
      </div>
      <div className={styles.ticker}>
        <Ticker
          list={partnershipList1.map(({ id, href, title, details }) => ({
            id,
            item: (
              <div className={styles.card}>
                <Link href={href}>
                  <CompanyCard
                    logoSlot={
                      <Image src={`/images/partnership-logos/${id}.png`} width={492} height={160} alt={title} />
                    }
                    title={title}
                    details={details}
                    align="left"
                  />
                </Link>
              </div>
            ),
          }))}
        />
      </div>
      <div className={styles.ticker}>
        <Ticker
          direction="right"
          list={partnershipList2.map(({ id, href, title, details }) => ({
            id,
            item: (
              <div className={styles.card}>
                <Link href={href}>
                  <CompanyCard
                    logoSlot={
                      <Image src={`/images/partnership-logos/${id}.png`} width={492} height={160} alt={title} />
                    }
                    title={title}
                    details={details}
                    align="left"
                  />
                </Link>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}

export { PartnershipSection };
