/* eslint-disable @next/next/no-img-element */
import s from './FoxExchange.module.scss';
import stars from './images/stars.png';
import planet from './images/planet.png';
import planetSeat from './images/planet-seat.png';
import fox from './images/fox.png';
import coin from './images/coin.png';
import card from './images/card.png';

export function FoxExchange() {
  return (
    <div className={s.root}>
      <img className={s.stars} src={stars.src} alt="" width="727" height="763" />
      <img className={s.planet} src={planet.src} alt="" width="176" height="121" />
      <img className={s.planetSeat} src={planetSeat.src} alt="" width="882" height="412" />
      <img className={s.fox} src={fox.src} alt="" width="712" height="648" />
      <img className={s.coin} src={coin.src} alt="" width="194.5" height="231" />
      <img className={s.card} src={card.src} alt="" width="329" height="283" />
    </div>
  );
}
