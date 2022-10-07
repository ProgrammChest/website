import React, { PropsWithChildren } from 'react'
import classes from '../styles/Icon.module.scss';

type IconProps = PropsWithChildren<React.ButtonHTMLAttributes<HTMLSpanElement>>;

export default function Icon({className, ...props}: IconProps) {
  return (
    <span className={`material-symbols-outlined ${classes.icon} ${className ?? ''}`} {...props} />
  )
}