import React from 'react';
import TaskItem from "./TaskItem";

const Task = ({task,deleteTask,toggleReminder}) => {

    return (

        <div>

            {task.map(el =>
                <TaskItem
                    toggleReminder={toggleReminder}
                    deleteTask={deleteTask}
                    key={el.id}
                    taskItem={el}
                />)}

        </div>
    );
};

export default Task;