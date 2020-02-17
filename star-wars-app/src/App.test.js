import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';




test("Render App header", () => {
    //Arrange, Act, Assert
    const wrapper = rtl.render(<App />);

    const element = wrapper.getByAltText(/logo/i);

    expect(element).toBeVisible();
})

