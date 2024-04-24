/* eslint-disable @next/next/no-img-element */
import s from './FoxCosmos.module.scss';
import bg from './images/bg.png';
import window from './images/window.png';
import shadow from './images/shadow.png';
import fox from './images/fox.png';

export function FoxCosmos() {
  return (
    <div className={s.root}>
      <img className={s.bg} src={bg.src} alt="" width="403" height="470" />
      <div className={s.windowMask} style={{ maskImage: `url(${bg.src})` }}>
        <img className={s.fox} src={fox.src} alt="" width="325" height="376" />
      </div>
      <img className={s.shadow} src={shadow.src} alt="" width="322" height="477" />
      <img className={s.window} src={window.src} alt="" width="477" height="526" />
    </div>
  );
}
