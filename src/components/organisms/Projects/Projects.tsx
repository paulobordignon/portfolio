import { Card } from "@src/components";

export function Projects() {
  const test = [1, 2, 3, 4];
  return (
    <section className="flex flex-col gap-5 md:ml-10 px-5 pt-64 xs:px-10">
      <p className="text-2xl text-primaryText font-semibold">I have built</p>
      <p className="text-lg text-secondaryText mb-10 font-semibold">
        The list below is public on the Ethereum blockchain{" "}
        <a
          className="text-primary"
          href="https://goerli.etherscan.io/address/0xC7B134E751293DC1905feD846eB68294a2A68f18"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          click here
        </a>{" "}
        to see the contract.
      </p>
      <ul className="flex gap-y-12 flex-wrap">
        {test.map((i) => (
          <Card key={i} sequence={i} />
        ))}
      </ul>
    </section>
  );
}
