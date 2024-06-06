import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "License",
    href: "#",
  },
  {
    title: "Contribute",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-secondary-dark py-4">
      <div className="container flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center md:justify-between">
      <Typography
        as="a"
        /** @ts-ignore */
        href="#"
        type="p"
        className="font-bold"
      >
        Blogi<span className="text-green-600">fy</span>
      </Typography>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {LINKS.map(({ title, href }, key) => (
          <li key={key}>
            {/** @ts-ignore */}
            <Typography as="a" href={href} className="hover:text-info font-medium">
              {title}
            </Typography>
          </li>
        ))}
      </ul>
      </div>
    </footer>
  );
}
