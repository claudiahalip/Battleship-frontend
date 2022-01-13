import React from 'react';
import waves from '../assets/wave.png';
import patchShip from '../actions/PatchShip'
import { placeShipURL } from '../api/api';

export interface CellInterface {
    shipName: string | null;
    isHit: boolean;
    isShip: boolean;
    row?: number;
    column?: number;
}

const Cell: React.FC<CellInterface> = function ({ isShip, row, column }) {

   
    const handleDrop = (event: any) => {
        event.preventDefault()
        const shipJSON = event.dataTransfer.getData("ship");
        const shipObject = JSON.parse(shipJSON)
        if(row && column){
            const shipInfo = {
                "ship": shipObject,
                "row": row,
                "col": column
        };

        const shipRequestJSON = JSON.stringify(shipInfo)
        console.log(shipRequestJSON)
        patchShip(placeShipURL, shipRequestJSON);
        }
    }

    const handleDragOver = (event: any) => {
        event.preventDefault()
    }

    const handleDragEnter = (event: any) => {
        event.preventDefault()
    }

    const handleDragLeave = (event: any) => {
        event.preventDefault()
    }

    return isShip ? (
        <div className="cell ship" data-testid="cell-ship" />
    ) : (
        <div onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} className="cell waves" data-testid="cell-waves" >
            <img className="wave-pic" src={waves} alt="waves" />
        </div>
    );
};

export default Cell;


