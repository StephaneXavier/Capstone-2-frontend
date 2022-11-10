import React from "react";
import SubmittWashroom from "./SubmittWashroom";

import { fireEvent, getByText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


it('renders without crashing', () => {
    render(<SubmittWashroom></SubmittWashroom>)
})

