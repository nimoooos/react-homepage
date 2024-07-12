import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';

export default function LineOfSight() {
    const [xAxis, setXAxis] = useState(15);
    const [yAxis, setYAxis] = useState(15);
    // const [tileSize, setTileSize] = useState(50);
    const tileSize=50;

    return (
        <>
            <h1>Line of sight tool</h1>
            <Table className='border table-bordered border-primary text-center' style={{ width: "250px" }}>

                <tr>
                    <td style={{ width: "15%" }}><Button onClick={() => setXAxis(xAxis - 1)}>-1</Button></td>
                    <td style={{ width: "70%" }}>Horizontal: {xAxis}</td>
                    <td style={{ width: "15%" }}><Button onClick={() => setXAxis(xAxis + 1)}>+1</Button></td>
                </tr>
                <tr>
                    <td style={{ width: "15%" }}><Button onClick={() => setYAxis(yAxis - 1)}>-1</Button></td>
                    <td style={{ width: "70%" }}>Vertical: {yAxis}</td>
                    <td style={{ width: "15%" }}><Button onClick={() => setYAxis(yAxis + 1)}>+1</Button></td>
                </tr>
            </Table>

            <Container className='text-center px-0'>
                <Row style={{height: tileSize}} className='border px-0'>
                    <Col style={{width: tileSize}} className='border px-0'></Col>
                    {Array.from({ length: xAxis }).map((_, xIndex) => (
                        <Col className='border px-0'>{xIndex + 1}</Col>
                    ))}</Row>
                {Array.from({ length: yAxis }).map((_, yIndex) => (
                    <Row style={{height: tileSize+"px"}} className='border px-0'>
                        <Col className='border px-0'>{yIndex + 1}</Col>
                        {Array.from({ length: xAxis }).map((_, xIndex) => (
                            <Col className='border px-0'>({xIndex + 1},{yIndex + 1})</Col>
                        ))}
                    </Row>
                ))
                }
            </Container>

        </>
    )
}


