import React from 'react';
import { Container } from '../App.styled';
import Quote from './Quote';

function QuoteList() {
    return (
        <Container>
            <Quote text="Float like a butterfly, sting like a bee. Float like a butterfly, sting like a bee. Float like a butterfly, sting like a bee. Float like a butterfly, sting like a bee. Float like a butterfly, sting like a bee. Float like a butterfly, sting like a bee." />
            <Quote text="Float like a butterfly, sting like a bee" />
            <Quote text="Float like a butterfly, sting like a bee" />
            <Quote text="Float like a butterfly, sting like a bee" />
            <Quote text="Float like a butterfly, sting like a bee" />
        </Container>
    )
}

export default QuoteList;