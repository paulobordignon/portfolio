import { Input } from "@src/components";

export function Admin() {
  const fields = [
    { label: "Title", placeholder: "Project title" },
    { label: "About", placeholder: "About the project" },
    { label: "Image", placeholder: "QmZk64ZpHdLrMkcK..." },
    { label: "Keywords", placeholder: "['Solidity', 'React']" },
    {
      label: "GitHub",
      placeholder: "https://github.com/paulobordignon/portfolio",
    },
    { label: "Website", placeholder: "paulobordignon.com" },
  ];

  return (
    <section className="min-h-[100vh] px-5 pt-[10vh] text-primaryText ">
      <form className="flex gap-5 flex-wrap ">
        {fields.map((item, i) => {
          return (
            <div
              className="basis-full sm:basis-[calc(50%-1.25rem)] w-max"
              key={item.label}
            >
              <Input label={item.label} placeholder={item.placeholder} />
            </div>
          );
        })}
      </form>
    </section>
  );
}
