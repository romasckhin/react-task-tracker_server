import React from 'react';
import styled from "styled-components";

const Button = ({show, showTask}) => {

    return (


            <ButtonAdd>
                <button
                    style={{background: showTask ? 'red' : 'green'}}
                    onClick={show}>
                    {showTask ? 'Close' : 'Add'}
                </button>
            </ButtonAdd>

    );
};

export default Button;

const ButtonAdd = styled.div`
  button {
    font-size: 15px;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    color: #fff3f3;
    border: none;
  }
`