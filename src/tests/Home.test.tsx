// __tests__/fetch.test.js
import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../components/Home'

const server = setupServer(
  rest.get('http://localhost:8080/', (req, res, ctx) => {
    return res(ctx.json('Welcome to Battleship'))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays welcome message', async () => {
  render(<Home/>)
    const divElement = await waitFor( () => screen.getByText(/Welcome to Battleship/i))
    expect(divElement).toBeInTheDocument();
})

