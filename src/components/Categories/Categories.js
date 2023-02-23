import Button from 'react-bootstrap/Button';
import './Categories.css'
export const Categories = () => {
    return (
        <div>
            <ul className="category-list">
                <li><Button className="button-radius" variant="outline-dark">Categoria 1</Button></li>
                <li><Button className="button-radius" variant="outline-dark">Categoria 2</Button></li>
                <li><Button className="button-radius" variant="outline-dark">Categoria 3</Button></li>
                <li><Button className="button-radius" variant="outline-dark">Categoria 4</Button></li>
            </ul>
        </div>
    );
  };