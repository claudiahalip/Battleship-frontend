import React, { useContext } from 'react';
import waves from '../assets/wave.png';
import patchShip from '../actions/PatchShip'
import { placeShipURL } from '../api/api';
import { BoardInterface, BoardsContext } from '../context/BoardsContext';

export interface CellInterface {
    shipName: string | null;
    isHit: boolean;
    isShip: boolean;
    row?: number;
    column?: number;
}

const Cell: React.FC<CellInterface> = function ({ isShip, row, column }) {

    const boardsContext = useContext(BoardsContext);
   
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
        patchShip(placeShipURL, shipInfo).then((response) =>
          boardsContext?.setPlayerBoard(response)
        ).catch( error => console.log(error)
    );

        
        // boardsContext?.updateBoard();
        }
    }

    const handleDragOver = (event: any) => {
        event.preventDefault()
    }

    const handleDragEnter = (event: any) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move";
    }

    const handleDragLeave = (event: any) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "none"
    }

    return isShip ? (
        <div className="cell ship" data-testid="cell-ship" />
    ) : (
        <div onDrop={handleDrop} 
        onDragOver={handleDragOver} 
        onDragEnter={handleDragEnter} 
        onDragLeave={handleDragLeave} 
        className="cell waves" 
        data-testid="cell-waves" >
            <img className="wave-pic" src={waves} alt="waves" />
        </div>
    );
};

export default Cell;


