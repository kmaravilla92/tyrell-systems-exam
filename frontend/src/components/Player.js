import { Fragment} from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card';

const Player = ({
    number,
    cards
}) => {
    return (
        <Fragment>
            <h2 className="mb-2">Player {number}</h2>
            <Row className="mb-4">
                {cards && cards.map((card, i) => {
                    return (
                        <Col className="mb-2" key={i} xs={12} sm={3}>
                            <Card card={card} />
                        </Col>
                    )
                })}
            </Row>
        </Fragment>
    )
}

export default Player;