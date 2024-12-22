import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import initTasks from '../../data/tasks'

export const fetchTasks = createAsyncThunk(
    'tasksList/fetchTasks',
    async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return initTasks;
    }
)

export const taskListSlice = createSlice({
    name: 'tasksList',
    initialState: {
        tasks: [],
        status: null,
        error: null
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: crypto.randomUUID(),
                title: action.payload,
                completed: false
            });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.tasks = action.payload;
        });
    }

})

export const { addTask, deleteTask } = taskListSlice.actions

export default taskListSlice.reducer