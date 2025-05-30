import react from 'react';
import { QuoteStyle } from './Quote.styled';

export type CardProps = {
    text: string;
}

function Quote({text}: CardProps) {
    return (
        <QuoteStyle>
            <p>{text}</p>
        </QuoteStyle>
    )
}

export default Quote;