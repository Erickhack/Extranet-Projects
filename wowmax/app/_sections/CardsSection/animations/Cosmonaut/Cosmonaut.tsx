/* eslint-disable @next/next/no-img-element */
import s from './Cosmonaut.module.scss';
import stars from './images/stars.png';
import cosmonaut from './images/cosmonaut.png';

export function Cosmonaut() {
  return (
    <div className={s.root}>
      <img className={s.stars} src={stars.src} alt="" width="441" height="329" />
      <img className={s.cosmonaut} src={cosmonaut.src} alt="" width="327" height="393.5" />
    </div>
  );
}
