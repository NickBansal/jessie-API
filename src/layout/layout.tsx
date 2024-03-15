import { Header } from '../components/header/header';

export const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
