import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
export const ItemListContainer = ({ItemListGroup}) => {
    return (
        <Container>
                <h3>{ItemListGroup}</h3>
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