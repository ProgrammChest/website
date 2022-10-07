import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  PropsWithChildren,
  ReactElement,
  ReactFragment,
  ReactNode,
} from "react";
import classes from "../styles/Navbar.module.scss";
import Icon from "./Icon";

type NavbarProps = PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    items: { name: string; href: string }[];
    header: React.ReactNode;
    trailing?: React.ReactNode;
  }
>;

export default function Navbar({
  items,
  header,
  trailing,
  ...props
}: NavbarProps) {
  const router = useRouter();
  const current = router.pathname;
  const [open, setOpen] = React.useState(false);
  return (
    <div className={classes.navbar} {...props}>
      <div className={classes.navbarHeader}>
        <Icon className={classes.navbarMenu} onClick={() => setOpen(!open)}>
          menu
        </Icon>
        <div className={classes.navbarTitle}>{header}</div>
      </div>
      <ul
        className={
          classes.navbarItems + " " + (open ? classes.navbarItemsOpen : "")
        }
      >
        {items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} passHref>
              <a
                className={
                  classes.navbarLink +
                  " " +
                  (current === item.href ? classes.navbarCurrentLink : "")
                }
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
        {trailing}
      </ul>
    </div>
  );
}
