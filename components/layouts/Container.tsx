import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";
import classes from "../../styles/Layout.module.scss";

type ContainerProps = {
  size?: "small" | "medium" | "large";
  space?: "no" | "small" | "medium" | "large";
  noBackground?: boolean;
};

const Container = styled.div<ContainerProps>`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          max-width: 600px;
        `;
      case "medium":
        return `  
          max-width: 800px;
        `;
      case "large":
        return `  
          max-width: 1000px;
        `;
    }
  }}
  padding: 2rem 0;
  ${({ space }) => {
    switch (space) {
      case "no":
        return `
          margin: 0 auto;
        `;
      case "small":
        return `
          margin: 2rem auto;
        `;
      case "large":
        return `
          margin: 6rem auto;
        `;
      default:
        return `
          margin: 4rem auto;
        `;
    }
  }}
`;

export default Container;
