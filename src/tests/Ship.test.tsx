import React from "react";
import "@testing-library/jest-dom";
import "jest";
import { fireEvent, render, screen } from "@testing-library/react";
import Ship from "../components/sidebar/Ship";

describe('<Ship/>', () => {

    const shipSectionsTest = [
      { shipName: "testShip", isHit: false, isShip: true },
      { shipName: "testShip", isHit: false, isShip: true },
    ];

    it('changes the opacity when is dragged', () => {
        render(
            <Ship name="testShip" width={1} height={2} shipSections={shipSectionsTest} />
        )
        const testShip = screen.getByTestId("testShip")
        fireEvent.dragStart(testShip, {dataTransfer: {setData: jest.fn(() => {})}})
        setTimeout(()=>{
            expect(testShip.style).toHaveProperty("opacity", "0.5");
        },1)
        
    })
})
