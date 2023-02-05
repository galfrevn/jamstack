import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ColorVariant = 'blue' | 'light-blue' | 'red' | 'purple' | 'white';
export interface TagProps {
  color: ColorVariant;
  label: string;
  icon: ReactNode;
  link: string;
}

const generateColorPair = (color: ColorVariant) => {
  let background;
  let border;

  switch (color) {
    case 'blue':
      background = '#677AFF3B';
      border = '#8386D566';
      break;
    case 'light-blue':
      background = '#84D7FF3B';
      border = '#b9e8ff3a';
      break;
    case 'purple':
      background = '#CC67FF3B';
      border = '#B583D566';
      break;
    case 'red':
      background = '#FF67673B';
      border = '#D5838366';
      break;
    case 'white':
      background = '#FFFFFF52';
      border = '#CDCDCD66';
      break;
  }

  return [background, border] as const;
};

const Tag = (props: TagProps & { index: number }) => {
  const { color, icon, label, link, index } = props;
  const [background, border] = generateColorPair(color);

  return (
    <motion.a
      href={link}
      target='_blank'
      rel='noreferrer'
      key={`tag-${label}`}
      className='h-6 border-2 rounded-md flex items-center justify-start pl-3 pr-4 select-none gap-2'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 + 0.05 * index } }}
      whileHover={{ scale: 1.05 }}
      style={{ backgroundColor: background, borderColor: border }}
    >
      {icon}
      <p className='text-xs'>{label} </p>
    </motion.a>
  );
};

export default Tag;
