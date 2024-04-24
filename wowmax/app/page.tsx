import {
  ArbitrageSection,
  BestPriceSection,
  BuildSection,
  CardsSection,
  ChainsSection,
  DecentralizedSection,
  DefiSection,
  ExchangeSection,
  FAQSection,
  FactListSection,
  JoinUsSection,
  PartnershipSection,
  SecuritySection,
  SupportSection,
  WalletsSection,
  WelcomeSection,
} from './_sections';
import styles from './page.module.scss';

function Home() {
  return (
    <main className={styles.main}>
      <section>
        <WelcomeSection />
      </section>
      <section>
        <CardsSection />
      </section>
      <section>
        <FactListSection />
      </section>
      <section>
        <ArbitrageSection />
      </section>
      <section>
        <SecuritySection />
      </section>
      <section>
        <BuildSection />
      </section>
      <section>
        <BestPriceSection />
      </section>
      <section>
        <ChainsSection />
      </section>
      <section>
        <DecentralizedSection />
      </section>
      <section>
        <WalletsSection />
      </section>
      <section>
        <DefiSection />
      </section>
      <section>
        <ExchangeSection />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <JoinUsSection />
      </section>
      <section>
        <PartnershipSection />
      </section>
      <section>
        <SupportSection />
      </section>
    </main>
  );
}

export default Home;
