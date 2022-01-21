import React from "react";
import "@testing-library/jest-dom";
import "jest";
import axios from "axios";
import { fireEvent, render, screen } from "@testing-library/react";
import Cell from "../components/Cell";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<Cell/>', () => {
    it('send a patch request when a ship is dropped', () => {
        const shipData = {name: "ShipTest", width: 1, height: 1, isSunk: false, shipSections:[] }
        const distanceFromLeftEdge = 0;
        const shipDataJSON = JSON.stringify(shipData)
        render(<Cell isPlayerBoard isShip={false} isHit={false} shipName={null} row={1} column={1}/>)
        const cellTest = screen.getByTestId("cell-waves");
        
        fireEvent.drop(cellTest, {dataTransfer: {ship: shipData,
            distanceFromLeftEdge, 
            getData: jest.fn((key) => {
            if(key === "ship") {
                return shipDataJSON}
            if(key ==="distanceFromLeftEdge"){
                return distanceFromLeftEdge;
            }})}})
        expect(mockedAxios.patch).toHaveBeenCalledTimes(1);
    })

})