import type { Link, TextLink } from '@/shared/types';

const logoLink: Link = { href: '/' };

const navLinks: TextLink[] = [
  { href: '/change-me', text: 'Menu link 1' },
  { href: '/change-me', text: 'Menu link 1' },
  { href: '/change-me', text: 'Menu link 1' },
  { href: '/change-me', text: 'Menu link 1' },
  { href: '/change-me', text: 'Menu link 1' },
];

const launchLink: TextLink = { href: '/change-me', text: 'Launch App' };

export { logoLink, navLinks, launchLink };
