import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		borderRadius: string;
		colors: {
			main: string;
			secondary: string;
		};
	}

	export interface ButtonProps
		extends React.ButtonHTMLAttributes<HTMLButtonElement> {
		backgroundColor?: string;
		color?: string;
		fontSize?: string;
		padding?: string;
		borderRadius?: string;
		hoverBackgroundColor?: string;
		hoverColor?: string;
		activeBackgroundColor?: string;
		activeColor?: string;
	}

	export interface InputProps
		extends React.InputHTMLAttributes<HTMLInputElement> {
		border?: any;
		margin?: number;
		height?: number;
		width?: number;
		background?: string;
		padding?: number;
		fontSize?: number;
		color?: any;
		fontWeight?: number;
	}

	export interface TodoLabelProps {
		status: boolean;
	}

	export const Button: StyledComponent<
		"button",
		DefaultTheme,
		ButtonProps,
		never
	>;
	export const Input: StyledComponent<"input", DefaultTheme, InputProps, never>;
	export const TodoLabel: StyledComponent<
		"label",
		DefaultTheme,
		TodoLabelProps,
		never
	>;
}
