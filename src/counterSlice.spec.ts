import todosReducer, {
	addTodos,
	TodosState,
	toggleTodos,
} from "./features/todosSlice";

describe("counter reducer", () => {
	const initialState: TodosState = {
		value: [
			{ text: "build", status: true, id: 1 },
			{ text: "play", status: false, id: 2 },
			{ text: "drink", status: false, id: 3 },
		],
	};
	it("should handle initial state", () => {
		expect(todosReducer(undefined, { type: "unknown" })).toEqual({
			value: [
				{ text: "build", status: true, id: 1 },
				{ text: "play", status: false, id: 2 },
				{ text: "drink", status: false, id: 3 },
			],
		});
	});

	it("should add todos", () => {
		const actual = todosReducer(initialState, addTodos("play"));
		expect(actual.value.length).toEqual(4);
	});

	it("should toggle todos completed", () => {
		const actual = todosReducer(
			initialState,
			toggleTodos({ text: "play", status: false, id: 2 })
		);
		expect(actual.value[1].status).toEqual(true);
	});

	it("should toggle todos uncompleted", () => {
		const actual = todosReducer(
			initialState,
			toggleTodos({ text: "build", status: true, id: 1 })
		);
		console.log(actual.value[1]);

		expect(actual.value.find((t) => t.id === 1)!.status).toEqual(false);
	});
});
