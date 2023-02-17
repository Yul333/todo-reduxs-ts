import { Container, ListContainer } from "./App.styled";
import { AddForm } from "./components/AddForm";
import GlobalStyle from "./components/styled/globalStyle";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
	return (
		<>
			<Container>
				<ListContainer>
					<h1>Todo List</h1>
					<TodoList />
					<AddForm />
					<GlobalStyle />
				</ListContainer>
			</Container>
		</>
	);
};

export default App;
