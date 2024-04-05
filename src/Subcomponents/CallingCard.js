import Card from 'react-bootstrap/Card';

export default function CallingCard(props) {
  return (
    <Card id={props.id} className="col-md-4 p-0 m-3" style={{width:"300px"}}>
      <Card.Img variant="top" src={props.imgSrc}/>
      <Card.Body>
        <Card.Title className="text-center">{props.itemName}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
