import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import classes from '../styles/Button.module.scss';

type ButtonProps = PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'primary' | 'secondary'
}>

export default function Button({variant, ...props}: ButtonProps) {
    return (
        <button className={classes.btn} {...props} />
    )
}