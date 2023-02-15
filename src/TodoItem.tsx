import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { toggleTodos } from "./features/todosSlice";
import "./TodoItem.css";

interface TodoItemProps {
	todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const dispatcher = useDispatch<AppDispatch>();
	return (
		<li>
			<label className={todo.status ? "status" : undefined}>
				<input
					type="checkbox"
					checked={todo.status}
					onChange={() => dispatcher(toggleTodos(todo))}
				/>
				{todo.text}
			</label>
		</li>
	);
};
