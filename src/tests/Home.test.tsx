import React from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
test("reterns a welcome message", () => {
    const response = {data: "Welcome to Battleship"};
    expect(mockedAxios.get.mockResolvedValue(response)).toBeInTheDocument
   
})


