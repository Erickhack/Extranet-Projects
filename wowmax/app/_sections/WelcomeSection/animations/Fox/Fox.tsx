/* eslint-disable @next/next/no-img-element */
import s from './Fox.module.scss';
import stars from './images/stars.png';
import star from './images/star.png';
import planet from './images/planet.png';
import fox from './images/fox.png';

export function Fox() {
  return (
    <div className={s.root}>
      <img className={s.stars} src={stars.src} alt="" width="680" height="647" />
      <img className={s.star} src={star.src} alt="" width="41" height="47" />
      <img className={s.planet} src={planet.src} alt="" width="71" height="71" />
      <div className={s.foxWrapper}>
        <img className={s.fox} src={fox.src} alt="" width="513" height="551" />
      </div>
    </div>
  );
}
