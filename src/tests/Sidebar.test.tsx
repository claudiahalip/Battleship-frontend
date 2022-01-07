import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "jest";
import Sidebar from "../components/sidebar/Sidebar";

describe("<Sidebar/>", () => {
  it("display the instructions", () => {
    render(<Sidebar />);
    expect(screen.getByText("Instructions:")).toBeInTheDocument;
  });

  it("display the Start now button", () => {
    render(<Sidebar />);
    expect(screen.getByText("Start now")).toBeInTheDocument;
  });
});
