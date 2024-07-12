import Cats from "../Subcomponents/Cats";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeRoute() {
    return (
        <>
            <h1>Hello,</h1>
            <p>Welcome to my homepage. It's still under construction!</p>
            <Link to="/resume"><Button className='my-2'>Resume</Button></Link>
            <Cats/>
        </>
        )
}