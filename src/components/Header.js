import React from 'react';
import Button from "./Button";
import styled from "styled-components";

const Header = ({show,showTask}) => {

    return (

        <Container>

            <h1>Task tracker</h1>

            <Button
                showTask={showTask}
                show={show}
            />

        </Container>
    );
};

export default Header;

const Container = styled.div`

  display: flex;
  justify-content: space-between; 
  align-items: center;
`