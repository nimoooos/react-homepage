import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { jobs } from './Beacon/jobs';
import { ancestries } from './Beacon/ancestries';
import { useState, useEffect } from 'react';

export default function Beacon() {
    const jobsObject = jobs;
    const ancestriesObject = ancestries;

    const [charMoniker, setCharMoniker] = useState({ name: "Default Name", title: "the Default-Titled", pronouns: "they/them" });
    const [charAncestry, setCharAncestry] = useState(ancestriesObject.Avian);
    const [charJob, setCharJob] = useState(jobsObject.Aegis);
    const [charStat, setCharStat] = useState({ level: 1 })
    const [nameBoxVisible, setNameBoxVisible] = useState(false);

    const nameChangeHandler = (event) => { setCharMoniker({ name: event.target.value, pronouns: charMoniker.pronouns, title: charMoniker.title }); }
    const pronounChangeHandler = (event) => { setCharMoniker({ pronouns: event.target.value, name: charMoniker.name, title: charMoniker.title }); }
    const titleChangeHandler = (event) => { setCharMoniker({ title: event.target.value, name: charMoniker.name, pronouns: charMoniker.pronouns }); }
    const ancestryChangeHandler = (event) => {
        if (ancestriesObject[event.target.value]) {
            setCharAncestry(ancestriesObject[event.target.value])
        } else {
            console.log("Unknown ancestry selected.");
        }
    }
    const jobChangeHandler = (event) => {
        if (jobsObject[event.target.value]) {
            setCharJob(jobsObject[event.target.value])
        } else {
            console.log("Unknown job selected.")
        }
    }

    function printCharacter() {

    }
    
    function exportCharacter() {

    }

    function importCharacter() {

    }
    

    return (
        <>
            <h1>Beacon Online Character Sheet</h1>
            <Form>
                <Form.Group controlId="basicInfo">
                    <h3>{charMoniker.name}, {charMoniker.title} ({charMoniker.pronouns}) <Button onClick={() => { setNameBoxVisible(!nameBoxVisible) }} size="sm" variant="outline-secondary" >🔧</Button></h3>
                    <div id='charNameBox' className={nameBoxVisible ? null : "d-none"}>
                        <Form.Control type="text" size="sm" id="characterName" placeholder={charMoniker.name} onChange={nameChangeHandler} />
                        <Form.Control type="text" size="sm" id="characterPronouns" placeholder={charMoniker.pronouns} onChange={pronounChangeHandler} />
                        <Form.Control type="text" size="sm" id="characterTitle" placeholder={charMoniker.title} onChange={titleChangeHandler} />
                    </div>
                </Form.Group>

                <h4>Level {charStat.level} {charAncestry.name} {charJob.name}</h4>
                <InputGroup className='p-1'>
                    <Form.Select id='AncestrySelect' onChange={ancestryChangeHandler}>
                        <option value={null}>Select Ancestry</option>
                        {Object.keys(ancestriesObject).map((ancestry) => {
                            return <option value={ancestry}>{ancestry}</option>
                        })}
                    </Form.Select>
                    <Form.Select >
                        <option value={null}>Select Ancestry Trait</option>
                        {charAncestry.traits.map((trait) => {
                            return <option value={trait}>{trait}</option>
                        })}

                    </Form.Select>
                </InputGroup>
                <InputGroup className='p-1'>
                    <Form.Select id="JobSelect" onChange={jobChangeHandler}>
                        <option value={null}>Select a Job</option>
                        {Object.keys(jobsObject).map((job) => {
                            return <option value={job}>{job}</option>
                        })}
                    </Form.Select>
                </InputGroup>
                <Button className='mx-1' onClick={printCharacter}>Export to Markdown</Button>
                <Button className='mx-1' onClick={exportCharacter}>Export to JSON</Button>
                <Button className='mx-1' onClick={importCharacter}>Import from JSON</Button>
                <Form.Control className='my-1' as="textarea" rows={10}/>
            </Form>
        </>
    )
}