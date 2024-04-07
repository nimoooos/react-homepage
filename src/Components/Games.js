import { Row } from "react-bootstrap"
import CallingCard from "../Subcomponents/CallingCard"
//import Forest from "../Assets/Forest.jpg"

export default function Games() {
    return (
        <>
            <h3>Games</h3>
            <Row>
                <CallingCard itemName="Alone" imgSrc={require("../Assets/Forest.jpg")} description="Deckbuilder survival game built in react" />
            </Row>
        </>
    )
}