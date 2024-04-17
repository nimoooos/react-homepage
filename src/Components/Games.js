import { Row } from "react-bootstrap"
import CallingCard from "../Subcomponents/CallingCard"

import CatOrDog from "./CatOrDog"

export default function Games() {
    return (
        <>
            <h3>Minigames</h3>
            <Row>
                <CatOrDog isCallingCard={true} />
            </Row>
        </>
    )
}