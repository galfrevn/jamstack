import useSWR from 'swr';

import { fetcher } from 'lib/swr';
import { motion } from 'framer-motion';
import { Eye } from 'react-feather';

import Hacked from 'components/TotalViews/hacked';

const SomethingWentWrong = () => (
  <motion.div
    key='total-count'
    className='h-6 bg-red-500/20 border-red-500/40 border-2 rounded-md w-24 flex items-center justify-start pl-3 '
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
    whileHover={{ scale: 1.05 }}
  >
    <Hacked />
  </motion.div>
);

const CurrentCount = ({ count }: { count: number }) => (
  <motion.div
    key='total-count'
    className='h-6 bg-neutral-500/20 border-neutral-500/40 border-2 rounded-md flex items-center justify-start pl-3 pr-4 select-none gap-2'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
    whileHover={{ scale: 1.05 }}
  >
    <Eye size={13} />
    <p className='text-xs'>{count} views </p>
  </motion.div>
);

const TotalViews = () => {
  const { data, error, isLoading } = useSWR<number>('api/count/total', fetcher);

  if (isLoading) return <></>;
  if (error) return <SomethingWentWrong />;

  return <CurrentCount count={data as number} />;
};

export default TotalViews;
