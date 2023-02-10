import React, { ReactNode } from 'react';
import useSWR from 'swr';

import Dots from 'components/Dots';

import { fetcher } from 'lib/swr';

export const Pill = ({ text, icon }: { text: string; icon?: ReactNode }) => (
  <div className='flex items-center gap-2 bg-neutral-600/20 rounded-md px-1.5 '>
    {icon}
    <span className='animate-[mutation_1s_ease-in-out_1] font-semibold text-xs lg:text-sm slashed-zero tabular-nums tracking-tight'>
      {text}
    </span>
  </div>
);

export const Metrics = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useSWR(`/api/count/${slug}`, fetcher);

  if (isLoading) return <Dots />;
  return <Pill text={`${data} views`} />;
};
