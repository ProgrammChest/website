import Link from "next/link";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import classes from "../styles/Navbar.module.scss";
import Icon from "./Icon";

type NavbarProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLDivElement> & {
    items: { name: string; href: string }[];
  }
>;

export default function Navbar({ items, ...props }: NavbarProps) {
  const router = useRouter();
  const current = router.pathname;
  return (
    <div className={classes.navbar} {...props}>
      <div className={classes.navbarHeader}>
        <Icon className={classes.navbarMenu}>menu</Icon>
        <div>
          Title
        </div>
      </div>
      <ul className={classes.navbarItems}>
        {items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} passHref>
              <a
                className={classes.navbarLink + " " + (current === item.href
                  ? classes.navbarCurrentLink
                  : "")}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
