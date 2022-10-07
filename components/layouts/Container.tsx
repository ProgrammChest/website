import React, { PropsWithChildren } from "react";
import classes from "../../styles/Layout.module.scss";

type ContainerProps = PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    size?: "small" | "medium" | "large";
    space?: "no" | "small" | "medium" | "large";
  }
>;

export default function Container({
  className,
  size,
  space,
  ...props
}: ContainerProps) {
  var currentClass = className ?? "";
  currentClass += " " + classes.container;

  switch (size) {
    case "small":
      currentClass += " " + classes.containerSmall;
      break;
    case "large":
      currentClass += " " + classes.containerLarge;
      break;
    default:
      currentClass += " " + classes.containerMedium;
      break;
  }
  switch (space) {
    case "no":
      break;
    case "small":
      currentClass += " " + classes.containerSpaceSmall;
      break;
    case "large":
      currentClass += " " + classes.containerSpaceLarge;
      break;
    default:
      currentClass += " " + classes.containerSpaceMedium;
      break;
  }
  return <div className={currentClass} {...props} />;
}
