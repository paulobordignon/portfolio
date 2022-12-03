import Link from "next/link";

export function FourOhFour() {
  return (
    <section className="h-[calc(100vh-15rem)] w-screen flex items-center justify-center flex-col">
      <h1 className="text-primary font-bold text-8xl pt-16">404</h1>
      <p className="text-primaryText font-bold text-xl">Page Not Found</p>
      <Link href="/">
        <a className="text-primary font-bold underline text-lg pt-16">
          Go Home
        </a>
      </Link>
    </section>
  );
}
