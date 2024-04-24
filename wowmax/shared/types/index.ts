type Link = {
  href: string;
  title?: string;
};

type TextLink = Link & {
  text: string;
};

type Icon = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string; src?: string }>;

type IconSlot = {
  Component: Icon;
  width?: number | string;
  height?: number | string;
  color?: string;
};

export type { Link, TextLink, Icon, IconSlot };
