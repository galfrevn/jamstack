import Link from 'next/link';
import React from 'react';

import { motion } from 'framer-motion';
import {
  githubUrl,
  linkedinUrl,
  portfolioUrl,
  twitterUrl,
} from 'constants/networks';

interface FooterLink {
  isExternal: boolean;
  label: string;
  url: string;
}

const footerLinks: FooterLink[] = [
  /*   { isExternal: false, label: "Videos", url: "/videos" }, */
  { isExternal: true, label: 'Portfolio', url: portfolioUrl },
  { isExternal: false, label: 'Inspired Tweets', url: '/tweets' },
  /* { isExternal: false, label: "Wordle", url: "/wordle" }, */
  { isExternal: true, label: 'Twitter', url: twitterUrl },
  { isExternal: true, label: 'Github', url: githubUrl },
  { isExternal: true, label: 'Linkedin', url: linkedinUrl },
];

const Footer = () => {
  const internalLink = footerLinks.filter((link) => !link.isExternal);
  const externalLink = footerLinks.filter((link) => link.isExternal);

  return (
    <div className='mt-36 pb-36'>
      <div className='flex flex-col justify-between text-sm font-medium lg:flex-row'>
        <div className='flex space-x-5'>
          {internalLink.map((link, index) => (
            <motion.div
              key={`footerLink-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.02 + 0.06 * index },
              }}
              whileHover={{ scale: 1.08 }}
            >
              <Link href={link.url} passHref>
                <a className='opacity-70'>{link.label}</a>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className='flex space-x-5 pt-2 lg:pt-0'>
          {externalLink.map((link, index) => (
            <motion.div
              key={`footerLink-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.22 + 0.06 * index },
              }}
              whileHover={{ scale: 1.08 }}
            >
              <Link href={link.url} passHref>
                <a target='_blank' className='opacity-70'>{link.label}</a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
