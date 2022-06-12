import { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Player from './components/Player';
import { fetchPlayers } from './utils/api';

const App = () => {

    const [errors, setErrors]                   = useState([]);
    const [players, setPlayers]                 = useState([]);
    const [maxPlayersInput, setMaxPlayersInput] = useState(localStorage.getItem('maxPlayers') || 1);
    const [maxPlayers, setMaxPlayers]           = useState(maxPlayersInput);

    useEffect(() => {
        fetchPlayers(maxPlayers, setPlayers, setErrors);
    }, []);

    const errorsList = (
        <p className="alert alert-danger">
            <strong>Oops! Something went wrong.</strong>
            {errors.join("\n")}
        </p>
    );

    const playersList = (
        <section className="mt-4">
            {players && players.map(player => {
                return <Player key={player.number} {...player}/>
            })}
        </section>
    );

    return (
        <Container className="my-5">
            <h1 class="text-center">Playing Cards Exam</h1>

            <Row className="mt-4 justify-content-center">
                <Col xs={4}>
                    <Form
                        className="d-flex flex-nowrap align-items-end"
                        onSubmit={e => {
                            e.preventDefault();
                            setMaxPlayers(maxPlayersInput);
                            fetchPlayers(maxPlayersInput, setPlayers, setErrors);
                            localStorage.setItem('maxPlayers', maxPlayersInput);
                        }}
                    >
                        <Form.Group>
                            <Form.Label htmlFor="max-players">Enter Max Players:</Form.Label>
                            <Form.Control
                                id="max-players"
                                className="form-control"
                                type="text"
                                value={maxPlayersInput}
                                onChange={e => {
                                    e.preventDefault();
                                    setMaxPlayersInput(e.currentTarget.value);
                                }}
                            />
                        </Form.Group>
                        <Button
                            className="ms-2"
                            variant="primary"
                            type="submit"
                        >
                            Distribute
                        </Button>
                    </Form>
                </Col>
            </Row>

            {errors.length > 0 && errorsList}
            {errors.length < 1 && playersList}
        </Container>
    );
}

export default App;
