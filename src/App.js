import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Header from "./components/Header";
import Task from "./components/Task";
import './App.css'
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {

    const [showTask, setShowTask] = useState(false)
    const [task, setTask] = useState([])

    useEffect(() => {

    axios({
        method: 'GET',
        url: `http://localhost:5000/tasks`
    })
        .then(res => setTask(res.data))
        .catch(err => console.log('err Get', err))

    }, [])

    const deleteTask = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/tasks/${id}`
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

    }

    const toggleReminder = (id) => {
        setTask(task.map(el => el.id === id ? {...el, reminder: !el.reminder} : el))
    }

    const show = () => {
        setShowTask(!showTask)
    }


    return (

        <Container>

            <Header
                show={show}
                showTask={showTask}
            />

            {showTask && <AddTask
                task={task}
                setTask={setTask}
            />}

            {task.length === 0 ?
                'No Tasks to Show'
                :
                <Task
                    toggleReminder={toggleReminder}
                    task={task}
                    setTask={setTask}
                    deleteTask={deleteTask}
                />}
                <Footer/>
        </Container>
    );
};

export default App;

const Container = styled.div`
  max-width: 420px;
  margin: 30px auto;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #d9d6c8;
  padding: 30px;

`