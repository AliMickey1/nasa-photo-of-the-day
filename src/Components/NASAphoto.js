import React from 'react';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body{
    font-family: 'Anton', sans-serif;
    font-family: 'Unbounded', cursive;
   }
`;
const NasaStyle = styled.div`
    padding: 3px 5px;
    margin: 5px 10px;
    background-color: "lightyellow";
    font-family: 'Unbounded', cursive;


`;

const NasaHeading = styled.h3`
    font-size: 35px;
    font-weight: 600;
    background-image: linear-gradient(to left, #553c9a, #b393d3);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-family: 'Anton', sans-serif;

`;
const Nasap = styled.p`
    font-size: 10px;
    display: flex;
    flex-wrap: wrap;
    border: 3px grey dotted;
    padding: 5px;
    font-family: 'Unbounded', cursive;
    /* From https://css.glass */
    background: rgba(72, 137, 206, 0.55);
    /* border-radius: 16px; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.9px);
    -webkit-backdrop-filter: blur(8.9px);
    /* border: 3px solid rgba(72, 137, 206, 1); */
`;

const NasaPhoto = (props) => {
    return (
        <NasaStyle className="nasa-photo-wrapper">
            <NasaHeading>{props.photo.title}</NasaHeading>
            <img src={props.photo.hdurl} />
            <Nasap className='explanation'>{props.photo.explanation}</Nasap>
            <Nasap>{props.photo.date}</Nasap>
        </NasaStyle>
    )
}

export default NasaPhoto;