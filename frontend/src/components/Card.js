import { Card as RBCard } from 'react-bootstrap';
import { getSuitIconBySuitAlias, getIconsPerColumn, getFaceImageBySuitAndValueAlias } from '../utils/cards';
import './Card.css';

const CardValue = ({
    suitAlias,
    suitColor,
    cardValueAlias,
    position
}) => {
    const inlineStyle = {
        color: suitColor
    };

    const altTag = `${suitAlias} Icon`;

    return (
        <span
            className={`player-card__value player-card__value--${position}`}
            style={inlineStyle}>
            {cardValueAlias}
            <img
                className="player-card__suit-icon player-card__suit-icon--small"
                src={getSuitIconBySuitAlias(suitAlias)}
                alt={altTag} />
        </span>
    );
}

const Card = (props) => {
    const {
        suit_alias: suitAlias,
        suit_color: suitColor,
        card_value: cardValue,
        card_value_alias: cardValueAlias,
        card_numeric_value: cardNumericValue,
        is_face_card: isFaceCard,
    } = props.card;
   
    const { sideColumnIcons, middleColumnIcons } = getIconsPerColumn(parseInt(cardNumericValue));

    let columns = [
        Array(sideColumnIcons).fill(null),
        Array(middleColumnIcons).fill(null),
        Array(sideColumnIcons).fill(null),
    ];

    if (isFaceCard) {
        columns = columns[1];
    }

    return (
        <RBCard className="player-card">
            <RBCard.Body className="player-card__body">
                <CardValue
                    suitAlias={suitAlias}
                    suitColor={suitColor}
                    cardValueAlias={cardValueAlias}
                    position="top"
                />
                <div className="player-card__inner">
                    {columns.map((icons, columnKey) => {

                        const images = !isFaceCard
                            ? icons.map((icon, iconKey) => {
                                return (
                                    <img
                                        className="player-card__suit-icon"
                                        src={getSuitIconBySuitAlias(suitAlias)} key={iconKey} />
                                );
                            })
                            : <img src={getFaceImageBySuitAndValueAlias(cardValueAlias, suitAlias)} />

                        return (
                            <div
                                className={`player-card__column player-card__column--${columnKey === 1 || isFaceCard ? 'centered' : ''}`}
                                key={columnKey}>
                                {images}
                            </div>
                        );
                    })}
                </div>
                <CardValue
                    suitAlias={suitAlias}
                    suitColor={suitColor}
                    cardValueAlias={cardValueAlias}
                    position="bottom"
                />
            </RBCard.Body>
        </RBCard>
    );
}

export default Card;