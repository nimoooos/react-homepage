import { Row } from "react-bootstrap"
import CallingCard from "../Subcomponents/CallingCard"
import AxiosAPI from "../Subcomponents/AxiosAPI"
import React, { useEffect, useState } from "react";

export default function Dogs() {
    // const [loaded, setLoaded] = useState(null);
    // let dog = [];
    // AxiosAPI({"url": "https://dog.ceo/api/breeds/image/random"})

    

    return (
        <div id="ComponentDogs">
            <h3>Dogs</h3>
            <Row>
                <CallingCard itemName="Dog 1" url="https://dog.ceo/dog-api/" imgSrc="https://images.dog.ceo/breeds/terrier-silky/n02097658_7785.jpg" description="This is a dog" />
                {/* <img src={AxiosAPI({"url": "https://dog.ceo/api/breeds/image/random"}).then(x=>x.data.message)}></img> */}
            </Row>
        </div>
    )
}