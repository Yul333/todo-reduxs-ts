import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
	const todos = useSelector((state: RootState) => state.todos.value);

	return (
		<div>
			{todos.map((todo) => {
				return <TodoItem key={todo.id} todo={todo} />;
			})}
		</div>
	);
};
