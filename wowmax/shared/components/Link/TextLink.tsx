import { Link } from './Link';

type Props = {
  text: string;
  href: string;
  title?: string;
};

function TextLink({ href, text, title = '' }: Props) {
  return (
    <Link href={href} title={title} isTextBased>
      {text}
    </Link>
  );
}

export { TextLink };
