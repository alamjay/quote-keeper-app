import react from 'react';
import { CardStyle } from './Card.styled';

export type CardProps = {
    quote: string;
}

function Card({quote}: CardProps) {
    return (
        <CardStyle>
            <p>{quote}</p>
        </CardStyle>
    )
}

export default Card;