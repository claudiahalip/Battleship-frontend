import React, { useContext } from 'react';
import waves from '../assets/wave.png';
import patchShip from '../actions/PatchShip'
import { placeShipURL } from '../api/api';
import { BoardsContext } from '../context/BoardsContext';

export interface CellInterface {
    shipName: string | null;
    isHit: boolean;
    isShip: boolean;
    row: number;
    column: number;
    isPlayerBoard: boolean
}

const Cell: React.FC<CellInterface> = function ({ isShip, row, column, shipName, isPlayerBoard }) {

    const boardsContext = useContext(BoardsContext);

    const calculateOffSet = (distanceInt: number) =>{
        if(distanceInt < 40){
            return 0
        }
        if(distanceInt < 80){
            return 1
        }if(distanceInt < 120) {
            return 2
        }if(distanceInt < 160) {
            return 3
        }if(distanceInt < 200) {
            return 4
        }
        return 0
    }
   
    const handleDrop = (event: any) => {
        event.preventDefault()
        const distanceFromLeftEdge = event.dataTransfer.getData(
          "distanceFromLeftEdge"
        );
        const distanceInt = parseInt(distanceFromLeftEdge, 10);
        
        const shipJSON = event.dataTransfer.getData("ship");
        const shipObject = JSON.parse(shipJSON)
       
        if(row !== undefined && column !== undefined){
            const shipInfo = {
                "ship": shipObject,
                "row": row,
                "col": column - calculateOffSet(distanceInt)
        };
        patchShip(placeShipURL, shipInfo).then((response) =>{
          boardsContext?.setPlayerBoard(response)
        }).catch( error => {
          event.dataTransfer.dropEffect = "none";
          const shipDiv = document.getElementById(shipObject.name);
            if(shipDiv){
              shipDiv.style.opacity = "1"
            }
          }
    );
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

    const calculateDistanceForShipEdge = (cellEdgeDistance: number) => {
       let totalDistance = cellEdgeDistance;
       for(let i = column-1; i>=0; i--){
          const testCell = boardsContext?.playerBoard.grid[row][i];
          if(testCell.isShip && testCell.shipName === shipName){
            totalDistance += 40;
          }
          else
          {break}
       }
       return totalDistance
    }

    const handleDragStart = (event: any) => {
      const shipList = boardsContext?.playerBoard.shipList
      let draggedShip;
      if(shipList){
          shipList.forEach( ship => {
              if (ship.name === shipName) {
                  draggedShip = ship

              }
          } )
        const shipJSON = JSON.stringify(draggedShip);
        const cellEdgeDistance = event.pageX - event.target.offsetLeft;
        const distanceFromLeftEdge = calculateDistanceForShipEdge(cellEdgeDistance)
        event.dataTransfer.setData(
          "distanceFromLeftEdge",
          distanceFromLeftEdge.toString()
        ); 
        event.dataTransfer.setData("ship", shipJSON);
        if (shipName) {
          const shipImage = document.getElementById(shipName);
          event.dataTransfer.setDragImage(shipImage, distanceFromLeftEdge, 0);
        }
      }
      
      
    }

    return isPlayerBoard ? (
      isShip ? (
        <div draggable onDragStart={handleDragStart}
        className="cell ship"
        data-testid="cell-ship" />
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          className="cell waves"
          data-testid="cell-waves"
        >
          <img className="wave-pic" src={waves} alt="waves" />
        </div>
      )
    ) : (
      <div
        className="cell waves"
        data-testid="cell-waves"
      >
        <img className="wave-pic" src={waves} alt="waves" />
      </div>
    );
    
};

export default Cell;


