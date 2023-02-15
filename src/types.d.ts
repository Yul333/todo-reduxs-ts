type Todo = {
	text: string;
	status: boolean;
	id: number;
};

type ToggleTodo = (chosenTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
