import React from 'react';
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'

const TaskItem = ({deleteTask, taskItem, toggleReminder}) => {


    return (

        <>
            <Container className={`${taskItem.reminder ? 'reminder' : ''}`}
                       onDoubleClick={() => toggleReminder(taskItem.id)}>

                <Title>

                    {taskItem.title}

                    <FaTimes style={{color: 'red'}} onClick={() => deleteTask(taskItem.id)}/>

                </Title>

                {taskItem.day}

            </Container>

        </>
    );
};
export default TaskItem;

const Container = styled.div`

  background: #f4f4f4;
  margin-bottom: 5px;
  padding: 14px;


`
const Title = styled.h3`
  margin: 0;
  display: flex;
  justify-content: space-between;
`
