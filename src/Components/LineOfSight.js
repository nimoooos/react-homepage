import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function LineOfSight() {
    const [xAxis, setXAxis] = useState(25);
    const [yAxis, setYAxis] = useState(15);

    return (
        <>
            <h1>Line of sight tool</h1>
            <Table>

            </Table>

            <p>
                <Button onClick={()=>setXAxis(xAxis-1)}>-X</Button> Horizontal: {xAxis} <Button onClick={()=>setXAxis(xAxis+1)}>+X</Button>
            </p>
            <p>
                <Button onClick={()=>setYAxis(yAxis-1)}>-Y</Button> Vertical: {yAxis} <Button onClick={()=>setYAxis(yAxis+1)}>+Y</Button>
            </p>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {Array.from({ length: xAxis }).map((_, xIndex) => (
                            <th key={xIndex}>{xIndex + 1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {Array.from({ length: yAxis }).map((_, yIndex) => (
                        <tr>
                            <th>{yIndex + 1}</th>
                            {Array.from({ length: xAxis }).map((_, xIndex) => (
                                <td key={xIndex}></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}


