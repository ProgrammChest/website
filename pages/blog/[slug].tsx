import { GetStaticProps } from "next";
import React from "react";
import Container from "../../components/layouts/Container";
import Text from "../../components/layouts/Text";
import HomeNavbar from "../../layouts/HomeNavbar";
import Image from "next/image";

type Props = {
  title: string;
  imageUrl: string;
};

export default function BlogEntry({ title, imageUrl }: Props) {
  return (
    <>
      <HomeNavbar />
      <Container>
        <div style={{width: "100%", height: "10%"}}>
          <Image
            alt="Blog thumbnail"
            layout="fixed"
            width={500}
            height={500}
            src={imageUrl}
          />
          <Text variant="xxl">{title}</Text>
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      title: "Blog Entry",
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/09/13/13/47/animal-7451968_1280.jpg",
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "test" } }],
    fallback: false,
  };
};
