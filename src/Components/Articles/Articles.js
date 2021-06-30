import React from 'react';
import './articles.css';
import { Container } from 'react-bootstrap';
import Card from '../Card';
import data from '../../data/data.json';
import './articles.css';

function Articles(props){
    const card = data.map((item) => 
        <Card
            imageUrl={item.imageUrl}
            title={item.title}
            id={item.id}
            key={item.id}
        />
    )
    return(
        <Container>
            <div className="items">
                { card }
            </div>
        </Container>
    );
}


export default Articles;