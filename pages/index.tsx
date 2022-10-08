import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/NewButton";
import Icon from "../components/Icon";
import Card from "../components/layouts/Card";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import Text from "../components/layouts/Text";
import Link from "../components/Link";
import HomeNavbar from "../layouts/HomeNavbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeNavbar />
      <main>
        <Container size="large">
          <Image width={256} height={256} src="/logo.svg" alt="logo" />
          <Text variant="big">Willkommen auf Programm Chest</Text>
          <Text variant="caption">
            Dem größten Programmier-Discord im deutschsprachigen Raum!
          </Text>
          <Button variant="primary">Join</Button>
          <Flex>
            <Link href="https://invite.programm-chest.dev" variant="primary">Join</Link>
            <Link href="https://invite.programm-chest.dev" variant="secondary">Erkunden</Link>
          </Flex>
        </Container>

        <Flex alignItems="stretch" flexWrap="wrap" justifyContent="center" gap={12}>
          <Card title="Hilfsbereite Community" icon="live_help">
            Da wir viele Programmierer aus den unterschiedlichsten Bereichen und Themengebieten bei uns versammeln, wird sich sicherlich jemand finden, der die passende Lösung für dein Problem bereithält
          </Card>

          <Card title="Erfahrung" icon="schedule">
            Seit nun mehr als 3 Jahren kümmert sich unser Team gemeinsam mit unserer Community um Anliegen anderer Mitglieder.
          </Card>

          <Card title="Gemeinschaft" icon="diversity_1">
            Abseits von Fragen und Hilfe gibt es bei uns auch so manch eine hitzige Diskussion oder ein interessantes Gespräch. Auch Memes, Witze oder interessante Neuigkeiten sind bei uns natürlich gerne gesehen.
          </Card>
        </Flex>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by me
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
