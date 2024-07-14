//React stuff
import { useState, useEffect } from 'react';

//Bootstrap elements
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InputGroup } from 'react-bootstrap';

//Data files
import { jobsData, ancestriesData } from './Beacon/data';

export default function Beacon() {
    // Importing data
    const jobs = jobsData;
    const ancestries = ancestriesData;
    const exampleChar = {
        level: 1,
        abilityScores: { bulk: 0, agility: 0, mind: 1, magic: 1 },
        baseAttributes: { // determined by job and ancestry alone, before items, ability scores, grit, etc.
            ...jobs.Equinox.stats, grit: 1, size: 1,
        },
        ancestry: ancestries.Elf,
        ancestryTrait: "Elven Accuracy",
        job: jobs.Equinox,
        backgroundSkills: [
            { name: "Truthseeker", rank: 1, notes: "This can be used any time Dhalia is trying to learn the truth about something, whether researching in books or detecting lies" },
            { name: "Disciple of the Sun", rank: 1, notes: "This applies whenever she uses magic." },
            { name: "Multipurpose Clothing", rank: 1, notes: "Things like paraglider cloak" }
        ],
        equipment: [],
        techniques: [],
    }
    const sizeArray = [1 / 2, 1, 2, 3]

    // State declarations
    const [charMoniker, setCharMoniker] = useState({ name: "Dhalia", title: "the All-Knowing", pronouns: "she/her" });
    const [charAncestry, setCharAncestry] = useState(exampleChar.ancestry);
    const [charAncestryTrait, setCharAncestryTrait] = useState(exampleChar.ancestryTrait);
    const [charLevel, setCharLevel] = useState(exampleChar.level);
    const [charJob, setCharJob] = useState(exampleChar.job);
    const [charAbilityScores, setCharAbilityScores] = useState(exampleChar.abilityScores);
    const [charSize, setCharSize] = useState(exampleChar.ancestry.size)
    const [charAttributes, setCharAttributes] = useState(exampleChar.baseAttributes)

    const [nameBoxVisible, setNameBoxVisible] = useState(false);

    useEffect(calculateAttributes,[charLevel,charJob,charAbilityScores])

    //State change handlers
    const nameChangeHandler = (event) => {
        let moniker = { name: charMoniker.name, pronouns: charMoniker.pronouns, title: charMoniker.title }
        moniker.name = event.target.value;
        setCharMoniker(moniker);
    }
    const pronounChangeHandler = (event) => {
        let moniker = { name: charMoniker.name, pronouns: charMoniker.pronouns, title: charMoniker.title }
        moniker.pronouns = event.target.value;
        setCharMoniker(moniker);
    }
    const titleChangeHandler = (event) => {
        let moniker = { name: charMoniker.name, pronouns: charMoniker.pronouns, title: charMoniker.title }
        moniker.title = event.target.value;
        setCharMoniker(moniker);
    }
    const levelChangeHandler = (event) => {
        const newLevel = event.target.value;
        if (newLevel < 1 || newLevel > 12) {
            console.log("Attempted to set to an invalid level value.");
        } else {
            setCharLevel(newLevel);
        }
    }
    const ancestryChangeHandler = (event) => {
        if (ancestries[event.target.value]) {
            setCharAncestry(ancestries[event.target.value])

            //change character size automatically based on ancestry
            setCharSize(ancestries[event.target.value].size)
        } else {
            console.log("Unknown ancestry selected.");
        }
    }
    const jobChangeHandler = (event) => {
        if (jobs[event.target.value]) {
            let newJob = jobs[event.target.value];
            setCharJob(newJob);
        } else {
            console.log("Unknown job selected.");
        }
    }

    //helpful macros
    function calculateAttributes() {
        /**
         * Recalculate all attributes based on level, job, BAMM, etc.
         */

        //Initial pass with job, ancestry, and level (except grit)
        let newAttributes = { ...charJob.stats }; //TODO: things turn into NaN here
        newAttributes.size = charAncestry.size;
        newAttributes.grit = Math.ceil(charLevel / 2);

        //BAMM
        newAttributes.hp += Number(charAbilityScores.bulk * 2);
        newAttributes.recoveries += Math.floor(charAbilityScores.bulk / 2);
        newAttributes.dodge += Number(charAbilityScores.agility);
        newAttributes.speed += Math.floor(charAbilityScores.agility / 2);
        newAttributes.stresscap += Number(charAbilityScores.mind);
        newAttributes.memory += Math.floor(charAbilityScores.mind / 2);
        newAttributes.adef += Number(charAbilityScores.magic);
        newAttributes.mp += Math.floor(charAbilityScores.magic / 2);

        //grit
        newAttributes.hp += newAttributes.grit;
        newAttributes.saveTarget += newAttributes.grit;
        newAttributes.memory += newAttributes.grit;
        
        setCharAttributes(newAttributes);
    }

    //render functions
    function RenderAbilityScoreGroup() {
        const changeBulk = (event) => {
            let newValue = event.target.value;
            if (newValue < 0) { newValue = 0 } else if (newValue > 6) { newValue = 6 };
            setCharAbilityScores({ ...charAbilityScores, bulk: newValue });
        }
        const changeAgility = (event) => {
            let newValue = event.target.value;
            if (newValue < 0) { newValue = 0 } else if (newValue > 6) { newValue = 6 };
            setCharAbilityScores({ ...charAbilityScores, agility: newValue });
        }
        const changeMind = (event) => {
            let newValue = event.target.value;
            if (newValue < 0) { newValue = 0 } else if (newValue > 6) { newValue = 6 };
            setCharAbilityScores({ ...charAbilityScores, mind: newValue });
        }
        const changeMagic = (event) => {
            let newValue = event.target.value;
            if (newValue < 0) { newValue = 0 } else if (newValue > 6) { newValue = 6 };
            setCharAbilityScores({ ...charAbilityScores, magic: newValue });
        }


        return (
            <>
                <InputGroup>
                    <InputGroup.Text>Bulk</InputGroup.Text><Form.Control value={charAbilityScores.bulk} type='number' onChange={changeBulk} />
                    <InputGroup.Text>Agility</InputGroup.Text><Form.Control value={charAbilityScores.agility} type='number' onChange={changeAgility} />
                    <InputGroup.Text>Mind</InputGroup.Text><Form.Control value={charAbilityScores.mind} type='number' onChange={changeMind} />
                    <InputGroup.Text>Magic</InputGroup.Text><Form.Control value={charAbilityScores.magic} type='number' onChange={changeMagic} />
                </InputGroup>
            </>

        )
    }

    //import and export functions
    function printCharacter() {
        /**
         * export to markdown format so it can be shared in a readable format
         */
    }

    function exportCharacter() {
        /**
         * export to json to preserve all data
         */
    }

    function importCharacter() {
        /**
         * import from json
         */
    }


    return (
        <>
            <h1>Beacon Online Character Sheet</h1>
            <Form id='characterForm'>
                <Form.Group controlId="monikerGroup">
                    <h3>{charMoniker.name}, {charMoniker.title} ({charMoniker.pronouns})
                        <Button onClick={() => { setNameBoxVisible(!nameBoxVisible) }} size="sm" variant="outline-secondary" >📝</Button></h3>
                    <div id='charNameBox' className={nameBoxVisible ? null : "d-none"}>
                        <Form.Control type="text" size="sm" id="characterName" placeholder="Character name" onChange={nameChangeHandler} />
                        <Form.Control type="text" size="sm" id="characterPronouns" placeholder="Pronouns" onChange={pronounChangeHandler} />
                        <Form.Control type="text" size="sm" id="characterTitle" placeholder="Title" onChange={titleChangeHandler} />
                    </div>
                </Form.Group>

                <Row>
                    <h4>Level {charLevel} {charAncestry.name} {charJob.name}</h4>
                </Row>

                <Row>
                    <Col>
                        <InputGroup id="ancestrySelectGroup" className=''>
                            <InputGroup.Text>Ancestry</InputGroup.Text>
                            <Form.Select id='ancestrySelect' size="sm" onChange={ancestryChangeHandler}>
                                <option value={null}>Select Ancestry</option>
                                {Object.keys(ancestries).map((ancestry) => { return <option value={ancestry} selected={charAncestry.name === ancestry}>{ancestry}</option> })}
                            </Form.Select>
                            <Form.Select id="ancestryTraitSelect" size="sm">
                                <option value={null}>Select Ancestry Trait</option>
                                {charAncestry.traits.map((trait) => { return <option value={trait} selected={charAncestryTrait === trait}>{trait}</option> })}
                            </Form.Select>

                            <InputGroup.Text>Size</InputGroup.Text><InputGroup.Text>{charSize}</InputGroup.Text>
                        </InputGroup>

                        <InputGroup id="jobSelectGroup" className=''>
                            <InputGroup.Text>Job</InputGroup.Text>
                            <Form.Select id="jobSelect" size="sm" onChange={jobChangeHandler}>
                                <option value={null}>Select a Job</option>
                                {Object.keys(jobs).map((job) => { return <option value={job} selected={charJob.name === job}>{job}</option> })}
                            </Form.Select>
                            <InputGroup.Text>Level</InputGroup.Text><Form.Control value={charLevel} type='number' onChange={levelChangeHandler} />
                        </InputGroup>
                    </Col>
                    <Col>
                        <RenderAbilityScoreGroup />
                        <InputGroup id="attributes1">
                            <InputGroup.Text>Grit</InputGroup.Text><Form.Control disabled value={Math.ceil(charLevel / 2)} type='number' />
                            <InputGroup.Text>Scope</InputGroup.Text><Form.Control disabled value={charAttributes.scope} type='number' />
                            <InputGroup.Text>Memory</InputGroup.Text><Form.Control disabled value={charAttributes.memory} type='number' />
                            <InputGroup.Text>Save Target</InputGroup.Text><Form.Control disabled value={charAttributes.saveTarget} type='number' />
                        </InputGroup>
                        <InputGroup id="attributes2">
                            <InputGroup.Text>HP</InputGroup.Text><Form.Control disabled value={charAttributes.hp} type='number' />
                            <InputGroup.Text>Stress</InputGroup.Text><Form.Control disabled value={charAttributes.stresscap} type='number' />
                            <InputGroup.Text>MP</InputGroup.Text><Form.Control disabled value={charAttributes.mp} type='number' />
                            <InputGroup.Text>Recoveries</InputGroup.Text><Form.Control disabled value={charAttributes.recoveries} type='number' />
                        </InputGroup>
                        <InputGroup id="attributes3">
                            <InputGroup.Text>Speed</InputGroup.Text><Form.Control disabled value={charAttributes.speed} type='number' />
                            <InputGroup.Text>Dodge</InputGroup.Text><Form.Control disabled value={charAttributes.dodge} type='number' />
                            <InputGroup.Text>A-Def</InputGroup.Text><Form.Control disabled value={charAttributes.adef} type='number' />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>

                </Row>

                <Form.Group id="importExportGroup" className='m-1'>
                    <Button className='mx-1' onClick={printCharacter}>Export to Markdown</Button>
                    <Button className='mx-1' onClick={exportCharacter}>Export to JSON</Button>
                    <Button className='mx-1' onClick={importCharacter}>Import from JSON</Button>

                    <Form.Control className='my-1' as="textarea" rows={10} value="test"/>
                </Form.Group>
            </Form>
        </>
    )
}