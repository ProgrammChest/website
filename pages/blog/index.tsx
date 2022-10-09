import React from "react";
import Container from "../../components/layouts/Container";
import HomeNavbar from "../../layouts/HomeNavbar";
import Text from "../../components/layouts/Text";
import Flex from "../../components/layouts/Flex";
import Card from "../../components/layouts/Card";
import Anchor from "../../components/Anchor";
import Icon from "../../components/Icon";

export default function Blog() {
  return (
    <>
      <HomeNavbar />

      <Container size="large">
        <Text variant="xxl">Blog</Text>
        <Flex flexWrap="wrap" gap={32} justifyContent="center">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card key={i} title="Title">
              <p style={{textAlign: "left"}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
              </p>
              <Flex alignItems="center"><Icon>coffee</Icon> Java</Flex>
              <Anchor size="small" href="#">
                Read more
              </Anchor>
            </Card>
          ))}
        </Flex>
      </Container>
    </>
  );
}
