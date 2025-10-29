export const taskReducer = (state, action) => {
    console.log(action, state);

    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { ...action.payload, id: Date.now() }];
        case 'EDIT_TASK':
            return state.map(task => task.id === action.payload.id ? { ...task, ...action.payload?.updates } : task);
        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.payload);
        case 'TOGGLE_TASK':
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        default:
            return state;
    }
}