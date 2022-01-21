import React from "react";
import "@testing-library/jest-dom";
import "jest";
import { fireEvent, render, screen } from "@testing-library/react";
import Ship from "../components/sidebar/Ship";

describe('<Ship/>', () => {
    
    jest.spyOn(global, "setTimeout");
    

    const shipSectionsTest = [
      { shipName: "testShip", isHit: false, isShip: true },
      { shipName: "testShip", isHit: false, isShip: true },
    ];

    it("changes the opacity when is dragged", () => {
      jest.useFakeTimers();
      render(
        <Ship
          name="testShip"
          width={1}
          height={2}
          shipSections={shipSectionsTest}
        />
      );
      const testShip = screen.getByTestId("testShip");
      fireEvent.dragStart(testShip, {
        dataTransfer: { setData: jest.fn(() => {}) },
      });
      setTimeout(() => {
        expect(testShip).toHaveStyle("opacity: 0.5");
      }, 1);

      jest.runAllTimers();
    });

    it("changes the opacity back to 1 when the drag ends unsuccesfully", () => {
      jest.useFakeTimers();
      render(
        <Ship
          name="testShip"
          width={1}
          height={2}
          shipSections={shipSectionsTest}
        />
      );
      const testShip = screen.getByTestId("testShip");
      fireEvent.dragStart(testShip, {
        dataTransfer: { setData: jest.fn(() => {}) },
      });
      fireEvent.dragEnd(testShip, {
          dataTransfer: {dropEffect: "none"}
      })
     setTimeout(() => {
        expect(testShip).toHaveStyle("opacity: 1");
     },1); 
    
    jest.runAllTimers();
    });
})
