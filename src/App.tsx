import { AddForm } from "./AddForm";
import { Container } from "./components/styled/form.styled";
import GlobalStyle from "./components/styled/globalStyle";

import { TodoList } from "./TodoList";

const App: React.FC = () => {
	return (
		<>
			<Container
				style={{
					border: "1px solid #ccc",
					height: "50%",
					width: "40%",
					padding: "20px",
					borderRadius: "5px",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<h1>Todo List</h1>
				<TodoList />
				<AddForm />
				<GlobalStyle />
			</Container>
		</>
	);
};

export default App;
