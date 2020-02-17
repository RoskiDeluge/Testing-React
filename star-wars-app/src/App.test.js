import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';


//Arrange, Act, Assert

test("Render App header", () => {
    const wrapper = rtl.render(<App />);

    const element = wrapper.getByAltText(/logo/i);

    expect(element).toBeVisible();
})

