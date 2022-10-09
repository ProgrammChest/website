import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { caption, mobileBreakpoint } from '../variables';

type TextProps = PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: 'xxl' | 'xl' | 'l' | 'm' | 'caption',
  align?: 'left' | 'center' | 'right',
}>

const Text = styled.p<TextProps>`
  text-align: ${({ align }) => align};
  ${({ variant }) => {
    switch (variant) {
      case 'xxl':
        return `
          font-size: 4rem;
          font-weight: 600;
          margin: 1rem 0;
        `;
      case 'xl':
        return `
          font-size: 2rem;
          font-weight: 600;
          margin: 0.5rem 0;
        `;
      case 'l':
        return `
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0.25rem 0;
        `;
      case 'caption':
        return `
          font-size: 1.5rem;
          font-weight: 500;
          color: ${caption};
        `;
      default:
        return `
          font-size: 1rem;
          font-weight: 400;
          margin: 1rem 0;
        `;
    }
  }}
  @media only screen and (max-width: ${mobileBreakpoint}) {
    ${({ variant }) => {
    switch (variant) {
      case 'xxl':
        return `
            font-size: 2rem;
          `;
      case 'xl':
        return `
            font-size: 1.5rem;
          `;
      case 'l':
        return `
            font-size: 1.25rem;
          `;
      case 'caption':
        return `
            font-size: 1rem;
          `;
      default:
        return `
            font-size: 0.8rem;
          `;
    }
  }}
  }
`;

export default Text;
