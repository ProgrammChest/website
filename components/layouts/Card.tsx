import { css } from "@emotion/react";
import Image, { StaticImageData } from "next/future/image";
import React, { PropsWithChildren, ReactNode } from "react";
import classes from "../../styles/Layout.module.scss";
import Icon from "../Icon";
import { primary } from "../variables";

type Props = PropsWithChildren<{
  title: ReactNode;
  icon?: string;
  image?: string | StaticImageData;
}>;

export default function Card({ title, icon, children, image }: Props) {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2rem;
      border: 2px solid ${primary};
      border-radius: 1rem;
      max-width: 15rem;
    `}>
      <div css={css`
        display: flex;
        flex-direction: column;
      `}>
        {image &&
          <Image
            alt={`${title} image`}
            style={{width: "100%", height: "auto"}}
            src={image}
          />
        }
        {icon && (
          <Icon color="primary" style={{ textAlign: 'center' }} size={64}>
            {icon}
          </Icon>
        )}
        <p css={css`
          font-size: 2rem;
          font-weight: 600;
          margin: 1rem 0;
          text-align: center;
        `}>{title}</p>
      </div>
      <div css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}>{children}</div>
    </div>
  );
}
