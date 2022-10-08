import styled from '@emotion/styled'

type ButtonProps = {
    variant?: "primary" | "secondary";
    size?: "small" | "normal" | "large";
};


const Button = styled.button<ButtonProps>`
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
                    background: #fff;
                    color: #000;
                    `;
            default:
                return `
                    background: #000;
                    color: #fff;
                    `;
        }
    }}
`;

export default Button;
