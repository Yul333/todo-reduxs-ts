import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface TodosState {
  value: Todo[]
}
const initialState: TodosState = {
  value: [
    { text: 'build', status: true, id: 1 },
    { text: 'play', status: false, id: 2 },
    { text: 'drink', status: false, id: 3 }
  ]
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<string>) => {
      state.value.push({
        text: action.payload,
        status: false,
        id: new Date().getTime()
      })
    },
    toggleTodos: (state, action: PayloadAction<Todo>) => {
      console.log('hi', action)

      state.value = state.value.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status: !todo.status
          }
        }
        return todo
      })
    }
  }
})

export const { addTodos, toggleTodos } = todosSlice.actions
export default todosSlice.reducer
