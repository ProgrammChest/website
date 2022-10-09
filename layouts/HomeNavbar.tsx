import Image from "next/image";
import Link from "next/link";
import Anchor from "../components/Anchor";
import Navbar from "../components/Navbar";
import Text from "../components/layouts/Text";

const HomeNavbar = ({title} : {title ?: string}) => {
  return (
    <Navbar
      header={
        <>
          <Image width={32} height={32} src="/logo.svg" alt="logo" />
          <Link href="/">
            <Text variant="l" style={{cursor: 'pointer'}}>{title ?? 'Programm Chest'}</Text>
          </Link>
        </>
      }
      trailing={
        <Anchor href="https://invite.programm-chest.dev" size="small">
          Join
        </Anchor>
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
