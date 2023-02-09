/* import moment from 'moment'; */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'react-feather';

const Update = () => {
  return (
    <div className='flex justify-between mt-8'>
      <motion.div
        key='blogs-text'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        className='flex items-center gap-2'
      >
        <h3>Latest blog entries</h3>
        <ArrowDownRight />
      </motion.div>
      {/* <p className='text-sm' >Updated {moment("20120620", "YYYYMMDD").fromNow()}</p> */}
    </div>
  );
};

export default Update;
