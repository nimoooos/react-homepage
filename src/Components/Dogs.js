import { Row } from "react-bootstrap"
import CallingCard from "../Subcomponents/CallingCard"
import AxiosAPI from "../Subcomponents/AxiosAPI"
import React, { useEffect, useState } from "react";

export default function Dogs() {
    const [dogs, setDogs] = useState([]);

    useEffect(()=>{
        setDogs(AxiosAPI('https://dog.ceo/api/breeds/image/random')
        .then(console.log(dogs)));
    },[])
    

    return (
        <div id="ComponentDogs">
            <h3>Dogs</h3>
            <Row>
                <CallingCard itemName="Dog 1" url="https://dog.ceo/dog-api/" imgSrc="https://images.dog.ceo/breeds/terrier-silky/n02097658_7785.jpg" description="This is a dog" />
                <CallingCard itemName="Dog 2" url="https://dog.ceo/dog-api/" imgSrc={dogs.message} description="Dog 2" />
                {/* <img src={AxiosAPI({"url": "https://dog.ceo/api/breeds/image/random"}).then(x=>x.data.message)}></img> */}
            </Row>
        </div>
    )
}