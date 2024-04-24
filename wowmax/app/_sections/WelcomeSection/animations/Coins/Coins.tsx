/* eslint-disable @next/next/no-img-element */
import s from './Coins.module.scss';
import stars from './images/stars.png';
import star1 from './images/star1.png';
import star2 from './images/star2.png';
import planet from './images/planet.png';
import btc from './images/btc.png';
import usdt from './images/usdt.png';
import eth from './images/eth.png';

export function Coins() {
  return (
    <div className={s.root}>
      <img className={s.stars} src={stars.src} alt="" width="619" height="664" />
      <img className={s.star1} src={star1.src} alt="" width="31" height="33" />
      <img className={s.star2} src={star2.src} alt="" width="28" height="32" />
      <img className={s.planet} src={planet.src} alt="" width="115" height="79" />
      <img className={s.btc} src={btc.src} alt="" width="181" height="184" />
      <img className={s.usdt} src={usdt.src} alt="" width="217" height="213" />
      <img className={s.eth} src={eth.src} alt="" width="149" height="147" />
    </div>
  );
}
