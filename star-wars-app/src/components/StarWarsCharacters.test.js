import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import StarWarsCharacters from './StarWarsCharacters';


test("Render of star wars characters", async () => {
    const wrapper = rtl.render(<StarWarsCharacters />);
    const character = await wrapper.findAllByTestId("character");
    expect(character[0]).toBeVisible();
})

test("Previous button click", () => {
    const wrapper = rtl.render(<StarWarsCharacters />);
    // const character = await wrapper.findAllByTestId("character");
    const nextButton = wrapper.getByText(/next/i);
    const previousButton = wrapper.getByText(/previous/i);

    rtl.act(() => {
        rtl.fireEvent.click(previousButton);
    });

    expect(nextButton).toBeDisabled();
})

test("Next button click", () => {
    const wrapper = rtl.render(<StarWarsCharacters />);
    const nextButton = wrapper.getByText(/next/i);
    const previousButton = wrapper.getByText(/previous/i);

    rtl.act(() => {
        rtl.fireEvent.click(nextButton);
    })

    expect(previousButton).toBeDisabled();
})