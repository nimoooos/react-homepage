import { Row } from "react-bootstrap"
import CallingCard from "./CallingCard"

export default function Cats() {
    return (
        <>
            <h3>Cats</h3>
            <Row>
                <CallingCard itemName="Cat 1" url="https://cataas.com" imgSrc="https://cataas.com/cat" description="This is a cat" />
                <CallingCard itemName="Cat 2" url="https://cataas.com" imgSrc="https://cataas.com/cat/says/1" description="This is also a cat" />
            </Row>
        </>
    )
}