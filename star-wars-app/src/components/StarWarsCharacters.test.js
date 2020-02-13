import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import StarWarsCharacters from './StarWarsCharacters'
import axios from 'axios';


test("Render of star wars characters", async () => {
    const wrapper = rtl.render(<StarWarsCharacters />);
    const character = await wrapper.findAllByTestId("character");
    expect(character[0]).toBeVisible();
})