import { Footer, Header } from "@src/components";

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
