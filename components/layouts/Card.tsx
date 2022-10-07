import React, { PropsWithChildren, ReactNode } from "react";
import classes from "../../styles/Layout.module.scss";
import Icon from "../Icon";

type Props = PropsWithChildren<{
  title: ReactNode;
  icon?: string;
}>;

export default function Card({ title, icon, children }: Props) {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        {icon && (
          <Icon color="primary" className={classes.cardIcon} size={64}>
            {icon}
          </Icon>
        )}
        <p className={classes.cardTitle}>{title}</p>
      </div>
      <div className={classes.cardContent}>{children}</div>
    </div>
  );
}
