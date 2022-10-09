import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";
import classes from "../styles/Icon.module.scss";
import variables from "../styles/variables.module.scss";
import { primary, text } from "./variables";

type IconProps = {
	size?: number;
	color?: "primary" | "text";
};

const Icon = styled.span<IconProps>`
	font-family: "Material Symbols Outlined";
	font-weight: normal;
	font-style: normal;
	font-size: 24px;
	line-height: 1;
	letter-spacing: normal;
	text-transform: none;
	display: inline-block;
	white-space: nowrap;
	word-wrap: normal;
	direction: ltr;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
	font-feature-settings: "liga";
  	user-select: none;
  	${({ size }) => {
		if (size) {
			return `font-size: ${size}px;`;
		}
	}}
	color: ${({ color }) => {
		switch (color) {
			case "primary":
				return primary;
			case "text":
				return text;
		}
	}};
`;

export default Icon;
