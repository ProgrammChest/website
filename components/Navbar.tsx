import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  PropsWithChildren,
} from "react";
import Icon from "./Icon";
import { mobileBreakpoint, panel, primary, text } from "./variables";

type NavbarProps = PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    items: { name: string; href: string }[];
    header: React.ReactNode;
    trailing?: React.ReactNode;
  }
>;

export default function Navbar({
  items,
  header,
  trailing,
  ...props
}: NavbarProps) {
  const router = useRouter();
  const current = router.pathname;
  const [open, setOpen] = React.useState(false);
  return (
    <div css={css`
      background: ${panel};
      display: flex;
      width: 100%;
      justify-content: space-between;
      @media only screen and (max-width: ${mobileBreakpoint}) {
        flex-direction: column;
      }
    `} {...props}>
      <div css={css`
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
      `}>
        <Icon css={css`
          display: none;
          @media only screen and (max-width: ${mobileBreakpoint}) {
            display: inherit;
          }
        `} onClick={() => setOpen(!open)}>
          menu
        </Icon>
        <div css={css`
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 600;
        `}>{header}</div>
      </div>
      <ul
        css={css`
          display: flex;
          align-items: center;
          margin-right: 2rem;
          list-style-type: none;
          gap: 2rem;
          @media only screen and (max-width: ${mobileBreakpoint}) {
            flex-direction: column;
            display: ${open ? "flex" : "none"};
          }
        `}
      >
        {items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} passHref>
              <a css={css`
                color: ${(current === item.href) ? primary : text};
                text-decoration: none;
                font-weight: 600;
                padding-bottom: ${(current === item.href) ? '0.2rem' : '0'};
                border-bottom: ${(current === item.href) ? `0.2rem solid ${primary}` : "none"};
                &:hover {
                    border-bottom: 0.2rem solid ${text};
                }
              `}>
                {item.name}
              </a>
            </Link>
          </li>
        ))}
        {trailing}
      </ul>
    </div>
  );
}
