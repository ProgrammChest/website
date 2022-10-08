import React, { PropsWithChildren } from "react";
import classes from "../styles/Button.module.scss";

type ButtonProps = PropsWithChildren<
    React.HTMLAttributes<HTMLButtonElement> & {
        variant?: "primary" | "secondary";
        size?: "small" | "normal" | "large";
    }
>;

export default function Button({
    variant,
    className,
    size,
    ...props
}: ButtonProps) {
    var currentClass = className ?? "";
    currentClass += " " + classes.btn;
    switch (variant) {
        case "secondary":
            currentClass += " " + classes.btnSecondary;
            break;
        default:
            currentClass += " " + classes.btnPrimary;
            break;
    }
    switch (size) {
        case "small":
            currentClass += " " + classes.btnSmall;
            break;
        case "large":
            currentClass += " " + classes.btnLarge;
            break;
    }

    return <button className={currentClass} {...props} />;
}
