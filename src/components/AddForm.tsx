import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addTodos } from "../features/todosSlice";
import { Button, Input } from "./AddForm.styled";

export const AddForm: React.FC = () => {
	const [addNewTodo, setAddNewTodo] = useState("");

	const dispatcher = useDispatch<AppDispatch>();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setAddNewTodo(event.target.value);
	};
	const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
		event.preventDefault();

		dispatcher(addTodos(addNewTodo));

		setAddNewTodo("");
	};

	return (
		<>
			<Input type="text" value={addNewTodo} onChange={handleChange} />
			<Button type="submit" onClick={handleSubmit}>
				Add{" "}
			</Button>
		</>
	);
};
