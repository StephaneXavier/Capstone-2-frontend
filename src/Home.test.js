import React from "react";
import Home from "./Home";
import { fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom'

test('it renders without crashing', () => {
    render(<Home/>)
})


test('it renders without crashing', () => {
    render(<Home/>)
})

it('should keep the same snapshot', () => {
    const {asFragment} = render(<Home/>);
    expect(asFragment()).toMatchSnapshot();
});

it('should show fetching data when page first loads',() => {
    const {queryByText, debug} = render(<Home/>)
    expect(queryByText("fetching data...")).toBeInTheDocument()
})

it('should show the find a washroom button once API data is done loading', () => {
    
})