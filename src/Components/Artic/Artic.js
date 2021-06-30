import React from 'react';
import { Container } from 'react-bootstrap';

function Artic(props){
    return (
        <>
            <Container>
                <h1 className="title">{props.title}</h1>
                <img src={props.imageUrl} alt="img" />
                <p className="description">{props.description}</p>
            </Container>
        </>
    );
}

export default Artic;