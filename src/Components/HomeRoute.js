// import Cats from "../Subcomponents/Cats";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomeRoute() {
    return (
        <>

            <h1>Aloha,</h1>
            <p>My name is Soomin Song, full-stack developer.</p>
            <Link to="/projects"><Button className='my-2'>Resume</Button></Link>
            {/* <Cats/> */}
        </>
        )
}