import React, { PropsWithChildren } from 'react'
import classes from '../styles/Button.module.scss';

type LinkProps = PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'normal' | 'large'
}>

export default function Link({variant, className, size, ...props}: LinkProps) {
    var currentClass = className ?? '';
    currentClass += ' ' + classes.btn;
    switch (variant) {
        case "secondary":
            currentClass += " " + classes.btnSecondary;
            break;
        default:
            currentClass += " " + classes.btnPrimary;
            break;
    }
    switch (size) {
        case 'small':
            currentClass += ' ' + classes.btnSmall;
            break;
        case 'large':
            currentClass += ' ' + classes.btnLarge;
            break;
    }
    
    return (
        <a className={currentClass} {...props} />
    )
}