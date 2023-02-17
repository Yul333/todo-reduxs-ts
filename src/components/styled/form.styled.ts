import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	border: 1px solid #003566;
`;
export const TodoLabel = styled.label<{ status: boolean }>`
	display: inline-block;
	padding: 10px;
	font-size: 24px;
	/* font-family: "Nunito Sans"; */
	font-weight: 600;
	color: ${(props) => (props.status ? "#ffe66d" : "#ff6b6b")};
	text-decoration: ${(props) => (props.status ? "line-through" : "none")};
	cursor: pointer;

	&:hover {
		background-color: #003566;
	}

	&.status {
		text-decoration: line-through;
	}
`;
export const Button = styled.button`
	background: #003566;
	color: #f7fff7;
	font-size: 22px;
	padding: 10px 28px;
	border: none;
	border-radius: 5px;
	font-family: "Nunito Sans";
	font-weight: 900;
	text-transform: uppercase;
	cursor: pointer;

	transition: background-color 0.2s, color 0.2s;

	&:hover {
		background-color: #f7fff7;
		color: #4ecdc4;
	}
`;

export const Input = styled.input`
	border: 2px solid #4ecdc4;
	display: block;
	height: 60px;
	width: 100%;
	max-width: 100%;
	background: #f7fff7;
	padding: 0px 20px;
	font-size: 24px;
	color: #001524;
	font-family: "Nunito Sans";
	font-weight: 600;
	border-radius: 5px;

	&:focus {
		outline: none;
		border-color: #4ecdc4;
	}
`;
