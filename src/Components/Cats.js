import { Row, Col } from "react-bootstrap"
import CallingCard from "../Subcomponents/CallingCard"

export default function Cats() {
    return (
        <>
            <h3>Cats</h3>
            <Row>
                <CallingCard itemName="test 1" imgSrc="https://cataas.com/cat" description="This is a cat" />
                <CallingCard itemName="test 2" imgSrc="https://cataas.com/cat/says/1" description="This is also a cat" />
            </Row>
        </>
    )
}