import { useState, useRef } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function TodoList() {
    const [tasksList, setTasksList] = useState([]);
    const newTaskInputRef = useRef(null);

    function addTask(taskText) {
        setTasksList([...tasksList, { id: crypto.randomUUID(), taskText: taskText }])
    }

    function removeTask(taskId) {
        setTasksList(tasksList.filter(task => task.id !== taskId));
    }

    function handleAddTask() {
        const taskText = newTaskInputRef.current.value.trim();
        if (taskText)
            addTask(taskText);
        newTaskInputRef.current.value = "";
    }


    return (
        <>
            <TextField
                id="new-task-text"
                label="Новая задача"
                multiline
                variant="standard"
                fullWidth
                sx={{ mb: "20px" }}
                inputRef={newTaskInputRef}
            />
            <Button onClick={handleAddTask} variant="contained">Добавить</Button>

            <Typography sx={{ marginTop: "30px" }} variant="h6">
                Список дел {tasksList.length === 0 && " пока пуст"}
            </Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {tasksList.map((task) => (
                    <ListItem
                        key={task.id}
                        disableGutters
                        secondaryAction={
                            <IconButton onClick={() => removeTask(task.id)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={task.taskText} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default TodoList;