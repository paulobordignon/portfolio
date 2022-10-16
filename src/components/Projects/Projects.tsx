import { Card } from "@src/components";

export function Projects() {
  const test = [1, 2, 3, 4];
  return (
    <section className="flex flex-col gap-5 md:ml-10 px-5 pt-64 xs:px-10">
      <p className="text-2xl text-primaryText mb-10 font-semibold">
        I have built
      </p>
      <ul className="flex gap-y-12 flex-wrap">
        {test.map((i) => (
          <Card key={i} sequence={i} />
        ))}
      </ul>
    </section>
  );
}
