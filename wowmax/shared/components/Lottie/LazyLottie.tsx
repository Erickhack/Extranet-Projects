/* eslint-disable react/jsx-props-no-spreading */

import { useQuery, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { type LottieComponentProps } from 'lottie-react';
import { Suspense, lazy } from 'react';

import styles from './Lottie.module.scss';

const queryClient = new QueryClient();

const Lottie = lazy(() => import('lottie-react'));

type LottieProps<T extends Record<string, unknown>> = {
  getJson: () => Promise<T>;
  id: string;
  fade?: boolean;
};

function LazyLottieComponent<T extends Record<string, unknown>>({
  getJson,
  id,
  fade = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
  ...props
}: LottieProps<T> & Omit<LottieComponentProps, 'animationData'>) {
  const { data } = useQuery({
    queryKey: [id],
    queryFn: getJson,
    enabled: typeof window !== 'undefined',
  });

  const options = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    ...props,
  };

  if (!data) return <div />;

  return (
    <Suspense fallback={<div />}>
      <Lottie className={fade ? styles.animate : ''} {...options} />
    </Suspense>
  );
}

function LazyLottie<T extends Record<string, unknown>>(
  props: LottieProps<T> & Omit<LottieComponentProps, 'animationData'>,
) {
  return (
    <QueryClientProvider client={queryClient}>
      <LazyLottieComponent {...props} />
    </QueryClientProvider>
  );
}

export { LazyLottie };
