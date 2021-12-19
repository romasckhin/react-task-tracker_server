import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";

const AddTask = ({task, setTask}) => {

    const [inputAddTask, setInputAddTask] = useState('')
    const [inputAddDayTimeTask, setInputAddDayTimeTask] = useState('')
    const [reminder , setReminder] = useState(false)

    const addNewTask = () => {

        if (!inputAddTask) {
            alert("Please add a task!")
            return
        }

        axios({
            method: 'POST',
            url: 'http://localhost:5000/tasks/',
                data: {
                    id: Math.random(),
                    title: inputAddTask,
                    day: inputAddDayTimeTask,
                    reminder: reminder
                }
        })
            .then(res => {
                    axios({
                        method: 'GET',
                        url: `http://localhost:5000/tasks`
                    })
                        .then(res => setTask(res.data))
                        .catch(err => console.log('err Get', err))

                })
            .catch(err => console.log('err Get', err))

        setInputAddTask('')
        setInputAddDayTimeTask('')
        setReminder(false)


    }


    return (

        <div>

            <label>Task</label><br/>
            <AddNewTask>
                <input type="text" placeholder='Add Task' value={inputAddTask}
                       onChange={event => setInputAddTask(event.target.value)}/><br/>
            </AddNewTask>

            <label>Day & Time</label><br/>
            <AddNewDayTime>
                <input type="text"  placeholder='Add Day & Time' value={inputAddDayTimeTask}
                       onChange={event => setInputAddDayTimeTask(event.target.value)}/><br/>
            </AddNewDayTime>

            <Setreminder>
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder}  onChange={event => setReminder(event.currentTarget.checked)}/>
            </Setreminder>

            <Button>

                <button onClick={addNewTask}>Save Task</button>

            </Button>

        </div>
    );
};

export default AddTask;

const AddNewTask = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;

  input {
    width: 100%;
    padding: 11px 0 11px 5px;
  }
`
const AddNewDayTime = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;

  input {
    width: 100%;
    padding: 11px 0 11px 5px;
  }
`
const Setreminder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    margin-right: 100px;
  }
`
const Button = styled.div`

  margin-top: 5px;
  margin-bottom: 10px;

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: #6ebb3d;
    border: none;
    color: white;
  }
`