import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>

            <Container>

                Task tracker &copy; 2022

            </Container>

            <Link to='/'> Go back </Link>
        </>
    );
};

export default Footer;

const Container = styled.div`
  text-align: center;
  margin-top: 20px;

`