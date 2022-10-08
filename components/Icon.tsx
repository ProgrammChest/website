import React, { PropsWithChildren } from "react";
import classes from "../styles/Icon.module.scss";
import variables from "../styles/variables.module.scss";

type IconProps = PropsWithChildren<
  React.HTMLAttributes<HTMLSpanElement> & {
    size?: number;
    color?: "primary" | "text";
  }
>;

export default function Icon({ className, children, ...props }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}}`}
      {...props}
    >
      <style jsx>
        {`
        span {
          font-size: ${props.size ?? 24}px;
          user-select: none;
        }
        span:hover {
          cursor: pointer;
          color: green;
        }
      `}
      </style>
      {children}
    </span>
  );
}
