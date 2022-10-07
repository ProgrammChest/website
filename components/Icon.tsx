import React, { PropsWithChildren } from "react";
import classes from "../styles/Icon.module.scss";
import variables from "../styles/variables.module.scss";

type IconProps = PropsWithChildren<
  React.HTMLAttributes<HTMLSpanElement> & {
    size?: number;
    color?: "primary" | "text";
  }
>;

export default function Icon({ className, ...props }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${classes.icon} ${className ?? ""}`}
      style={{
        fontSize: props.size ?? 24,
        color: props.color === "primary" ? variables.primaryColor : "inherit",
      }}
      {...props}
    />
  );
}
