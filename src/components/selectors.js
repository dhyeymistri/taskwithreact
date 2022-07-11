import { createSelector } from "reselect";
//we can pass as many selectors in the createselector
// function, and the last argument is a function that
// returns the value of the whole selector

//createselecctor is used because all the selectors we have 
//used are pure functions(whose output solely depend on its 
//input), so every time the app re-renders, we do not have
// to waste the computational power to compute the selector
// function again if the arguments remains the same.
// createSelector checks that this does not happen

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);