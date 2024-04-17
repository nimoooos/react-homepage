import Card from 'react-bootstrap/Card';
import CardLink from 'react-bootstrap/CardLink'
import { Link } from 'react-router-dom';

export default function CallingCard(props) {
  /*
    props.url: the card acts as a button. Link to where the button leads.
    props.id: id for the element
    props.imgSrc: source for the image
    props.itemName: title for the card
    props.description: description for the card
  */
  return (
    <>
      <Card to={props.url} id={props.id} className="col-md-4 p-0 m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title className="text-center">{props.itemName}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <a href={props.url} class="stretched-link"></a>
      </Card>
    </>
  );
}
