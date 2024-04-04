import Card from 'react-bootstrap/Card';

export default function Signpost() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cataas.com/cat" />
      <Card.Body>
        <Card.Title>Item name</Card.Title>
        <Card.Text>
          Quick description of the item. The card should also be a link.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
