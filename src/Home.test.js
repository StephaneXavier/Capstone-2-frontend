import React from "react";
import Home from "./Home";

import { fireEvent, getByText, render, screen } from "@testing-library/react";
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

it('testing screen', () => {
    const {queryByText} = render(<Home cityWashrooms={[{washroomType : 'washroom1', geometry:{x:45.555, y:75.555}}]}/>);
    const findWashroom = queryByText('Find a washroom!')

    expect(screen.getByText('Find a washroom!')).toBeInTheDocument()
    
    
})