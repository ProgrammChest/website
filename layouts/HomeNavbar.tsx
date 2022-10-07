import Image from "next/image";
import React from "react";
import Link from "../components/Link";
import Navbar from "../components/Navbar";

const HomeNavbar = ({title} : {title ?: string}) => {
  return (
    <Navbar
      header={
        <>
          <Image width={32} height={32} src="/logo.svg" alt="logo" />
          <span>{title ?? 'Programm Chest'}</span>
        </>
      }
      trailing={
        <Link href="https://invite.programm-chest.dev" size="small">
          Join
        </Link>
      }
      items={[
        {
          name: "Home",
          href: "/",
        },
        {
          name: "Wiki",
          href: "/wiki",
        },
        {
          name: "Blog",
          href: "/blog",
        },
        {
          name: "About",
          href: "/about",
        },
      ]}
    />
  );
};

export default HomeNavbar;
