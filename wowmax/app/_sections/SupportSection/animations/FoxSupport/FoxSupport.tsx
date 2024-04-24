/* eslint-disable @next/next/no-img-element */
import s from './FoxSupport.module.scss';
import stars from './images/stars.png';
import planetSeat from './images/planet-seat.png';
import fox from './images/fox.png';
import text from './images/text.png';

export function FoxSupport() {
  return (
    <div className={s.root}>
      <img className={s.stars} src={stars.src} alt="" width="863" height="715" />
      <img className={s.planetSeat} src={planetSeat.src} alt="" width="900" height="169" />
      <img className={s.fox} src={fox.src} alt="" width="593" height="565" />
      <img className={s.text} src={text.src} alt="" width="206" height="192" />
    </div>
  );
}
