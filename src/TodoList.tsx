import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
	const todos = useSelector((state: RootState) => state.todos.value);

	return (
		<ul>
			{todos.map((todo) => {
				return <TodoItem key={todo.id} todo={todo} />;
			})}
		</ul>
	);
};
// =======
// import { TodoItem } from "./TodoItem"

// interface TodoListProps {
//     todos: Array<Todo>;
//     toggleTodo: ToggleTodo;
// }
// export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
//     return (
//         <ul>
//             {todos.map(todo => {
//                 return <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
//             })}
//         </ul>
//     )
// }

// import { useSelector } from "react-redux";
// import { RootState } from "./app/store";
// import { TodoItem } from "./TodoItem";

// export const TodoList: React.FC = () => {
// 	const todos = useSelector((state: RootState) => state.todos.value);

// 	return (
// 		<ul>
// 			{todos.map((todo) => {
// 				return <TodoItem key={todo.id} todo={todo} />;
// 			})}
// 		</ul>
// 	);
// };
