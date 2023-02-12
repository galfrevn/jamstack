import useSWR from 'swr';

import { fetcher } from 'lib/swr';
import { motion } from 'framer-motion';
import { Eye } from 'react-feather';

import Hacked from 'components/TotalViews/hacked';
import Dots from 'components/Dots';

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

const TotalViews = () => {
  const { data, error, isLoading } = useSWR<number>('api/count/total', fetcher);

  if (error) return <SomethingWentWrong />;

  return (
    <motion.div
      key='total-count'
      className='h-6 bg-neutral-500/20 border-neutral-500/40 border-2 rounded-md flex items-center justify-start pl-3 pr-4 select-none gap-2'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      whileHover={{ scale: 1.05 }}
    >
      <Eye size={13} />
      {isLoading && <Dots />}
      {data && (
        <p className='text-xs animate-[mutation_1s_ease-in-out_1]'>{data}</p>
      )}
      <p className='text-xs -ml-0.5'>total views</p>
    </motion.div>
  );
};

export default TotalViews;
