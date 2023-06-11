import Link from "next/link";

export function FourOhFour() {
  return (
    <section className="h-[calc(100vh-5rem)] w-screen flex items-center justify-center flex-col">
      <h1 className="text-primary font-bold text-8xl pt-16">404</h1>
      <p className="text-primaryText font-bold text-xl">Page Not Found</p>
      <Link className="text-primary font-bold underline text-lg pt-8" href="/">
        Go Home
      </Link>
    </section>
  );
}
