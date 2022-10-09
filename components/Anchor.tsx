import styled from '@emotion/styled'
import { primary, text } from './variables';

type AnchorProps = {
    variant?: "primary" | "secondary";
    size?: "small" | "normal" | "large";
};


const Anchor = styled.a<AnchorProps>`
    padding: 0.5rem 4rem;
    border-radius: 0.8rem;
    border: 0;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 0.5rem;
    text-decoration: none;
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    ${({ variant }) => {
        switch (variant) {
            case "secondary":
                return `
                    color: ${primary};
                    background: transparent;
                    border: 4px solid ${primary};
                    &:hover {
                      background: ${primary};
                      color: ${text};
                    }
                    `;
            default:
                return `
                    color: ${text};
                    background: ${primary};
                    border: 4px solid ${primary};
                    &:hover {
                      background: ${text};
                      color: ${primary};
                    }
                    `;
        }
    }}
    ${({ size }) => {
        switch (size) {
            case "small":
                return `
                    padding: 0.5rem 2rem;
                    font-size: 1rem;
                    border-width: 2px;
                    `;
            case "large":
                return `
                    padding: 0.5rem 6rem;
                    font-size: 2rem;
                    border-width: 6px;
                    `;
        }
    }}
`;

export default Anchor;
