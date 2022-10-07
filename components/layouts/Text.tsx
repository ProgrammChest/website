import React, { PropsWithChildren } from 'react';
import classes from '../../styles/Layout.module.scss';

type TextProps = PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement> & {
    variant: 'big' | 'normal' | 'caption'
}>

export default function Text({variant, className, ...props}: TextProps) {
  var currentClass = className ?? '';

  switch(variant) {
    case 'big':
        currentClass += ' ' + classes.textBig;
        break;
    case 'normal':
        currentClass += ' ' + classes.textNormal;
        break;
    case 'caption':
        currentClass += ' ' + classes.textCaption;
        break;
}

  return (
    <p className={currentClass} {...props} />
  )
}