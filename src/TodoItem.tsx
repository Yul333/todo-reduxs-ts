import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { TodoLabel } from "./components/styled/form.styled";
import { toggleTodos } from "./features/todosSlice";

interface TodoItemProps {
	todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const dispatcher = useDispatch<AppDispatch>();
	return (
		<li>
			<TodoLabel
				className={todo.status ? "status" : undefined}
				status={todo.status}
			>
				<input
					type="checkbox"
					checked={todo.status}
					onChange={() => dispatcher(toggleTodos(todo))}
				/>

				{todo.text}
			</TodoLabel>
		</li>
	);
};
