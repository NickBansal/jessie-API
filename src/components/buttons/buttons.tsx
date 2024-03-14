import './buttons.css';

export const ButtonLink = ({ href, btnText }: { href: string; btnText: string }) => {
  return (
    <a href={href} className="spotify-link">
      {btnText}
    </a>
  );
};
