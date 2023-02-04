import { TagProps } from 'components/Tag';

export const linkedinUrl = 'https://linkedin.com/in/galfrevn';
export const githubUrl = 'https://github.com/galfrevn';
export const twitterUrl = 'https://twitter.com/galfrevn';

export const socials: Omit<TagProps, 'icon'>[] = [
  {
    link: linkedinUrl,
    color: 'blue',
    label: 'Linkedin',
  },
  {
    link: twitterUrl,
    color: 'light-blue',
    label: 'Twitter',
  },
  {
    link: githubUrl,
    color: 'white',
    label: 'Github',
  },
];
