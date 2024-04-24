import type { Link, TextLink } from '@/shared/types';

const logoLink: Link = { href: '/' };

const navLinks: (TextLink & { id: string })[] = [
  { id: '1', href: '/change-me', text: 'Menu link 1' },
  { id: '2', href: '/change-me', text: 'Menu link 1' },
  { id: '3', href: '/change-me', text: 'Menu link 1' },
  { id: '4', href: '/change-me', text: 'Menu link 1' },
  { id: '5', href: '/change-me', text: 'Menu link 1' },
];

const launchLink: TextLink = { href: '/change-me', text: 'Launch App' };

export { logoLink, navLinks, launchLink };
