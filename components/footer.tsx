import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-secondary-dark py-6">
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
        <Typography
          type="small"
          className="font-medium"
        >
          &copy; {currentYear}{" "} All
          Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}
