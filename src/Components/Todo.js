import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export default function Todo() {
  let todolist = [];
  todolist.push({ task: "Make something fun and interesting (good for my mental health)", priority: 2 });
  todolist.push({ task: "Add dog api with Axios", priority: 1 });
  
  todolist.push({ task: "Do something else with navbar", priority: 2 });
  todolist.push({ task: "Change website title and icon and stuff", priority: 1 });
  todolist.push({ task: "Set up resume", priority: 4 });
  todolist.push({ task: "Celebrate with rice wine", priority: 3 });
  todolist.push({ task: "Make an icon", priority: 2 });

  todolist.sort((a, b) => a.priority - b.priority);

  return (
    <ListGroup id="todolist" >
      <h3>Coming Soon (To Do list)</h3>
      
        {todolist.map(x =>
          <ListGroup.Item>
            {x.task} {
              x.priority === 1 ? <Badge bg="danger">1</Badge>
                : x.priority === 2 ? <Badge bg="warning">2</Badge>
                  : x.priority === 3 ? <Badge bg="info">3</Badge>
                    : <Badge bg="success">4</Badge>}
          </ListGroup.Item>)}
      
    </ListGroup>
  )
}