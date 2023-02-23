import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
export const ItemListContainer = ({greeting}) => {
    return (
        <Container>
                <h3>{greeting}</h3>
                <>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Producto 1</ListGroup.Item>
                        <ListGroup.Item>Producto 2</ListGroup.Item>
                        <ListGroup.Item>Producto 3</ListGroup.Item>
                        <ListGroup.Item>Producto 4</ListGroup.Item>
                    </ListGroup>
                </>
        </Container>
    );
}