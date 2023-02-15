import { AddForm } from "./AddForm";

import { TodoList } from "./TodoList";

const App: React.FC = () => {
	return (
		<>
			<TodoList />

			<AddForm />
		</>
	);
};

export default App;
