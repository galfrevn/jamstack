import React, { useState, useEffect } from 'react';

const Hacked = () => {
  const [text, setText] = useState('00000');
  const characters = '0123456789%#';

  useEffect(() => {
    const interval = setInterval(() => {
      let newText = '';
      for (let i = 0; i < 5; i++) {
        newText += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      setText(newText);
    }, 400);

    return () => clearInterval(interval);
  }, [characters]);

  return <p className='text-xs selection:bg-red-500/50 selection:text-white '>{text} views</p>;
};

export default Hacked;
