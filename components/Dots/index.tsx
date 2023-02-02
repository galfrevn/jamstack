import React from 'react';

const Dots = () => {
  return (
    <span className='bg-neutral-600/20 space-x-1 rounded-md px-1.5 font-semibold text-xs lg:text-sm slashed-zero tabular-nums tracking-tight'>
      <span className='inline-flex animate-[loading_1.4s_ease-in-out_infinite] font-black rounded-full'>
        &bull;
      </span>
      <span className='inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] font-black rounded-full'>
        &bull;
      </span>
      <span className='inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] font-black rounded-full'>
        &bull;
      </span>
    </span>
  );
};

export default Dots;
