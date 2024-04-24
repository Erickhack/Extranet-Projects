'use client';

import { useLottie, LottieOptions } from 'lottie-react';

type Props = {
  asset: LottieOptions['animationData'];
};

function LottieComponent({ asset }: Props) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: asset,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { View } = useLottie(options);

  return <div>{View}</div>;
}

export { LottieComponent as Lottie };
