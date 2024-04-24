/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import cn from 'classnames';

import './swiper.scss';

type Props = {
  list: { id: string; item: ReactNode }[];
  paddings?: string;
  slideWidth?: string;
} & SwiperProps;

function Carousel({ list, paddings = '0', slideWidth = '', navigation = false, ...props }: Props) {
  return (
    <Swiper
      className={cn('swiper-carousel', { 'swiper-carousel-with-nav': navigation })}
      modules={[FreeMode, Navigation]}
      navigation={navigation}
      {...props}
    >
      {list.map(({ id, item }, index) => (
        <SwiperSlide key={id} style={{ width: slideWidth }}>
          <div
            style={{
              paddingLeft: paddings && index === 0 ? paddings : '',
              paddingRight: paddings && index === list.length - 1 ? paddings : '',
            }}
          >
            {item}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { Carousel };
