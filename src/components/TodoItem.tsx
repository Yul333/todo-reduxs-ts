import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { toggleTodos } from "../features/todosSlice";
import { TodoLabel } from "./TodoItem.styled";

interface TodoItemProps {
	todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const dispatcher = useDispatch<AppDispatch>();
	return (
		<TodoLabel
			className={todo.status ? "status" : undefined}
			status={todo.status}
		>
			{todo.text}
			<input
				type="checkbox"
				checked={todo.status}
				onChange={() => dispatcher(toggleTodos(todo))}
			/>
		</TodoLabel>
	);
};
