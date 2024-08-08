import { render, screen } from "@testing-library/react";
import Contact from '../../components/Contact';
import '@testing-library/jest-dom';

describe("Testcases for Contact Us Component", () => {
    beforeAll(() => {
        // console.log("Before Test");
    })

    beforeEach(() => {
        // console.log("Before Test");
    })
    afterAll(() => {
        // console.log("Before Test");
    })

    afterEach(() => {
        // console.log("Before Test");
    })

    test("Should load contact us component",() => {
        render(<Contact/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })

    test("Should load button inside contact us component",() => {
        render(<Contact/>);
        const heading = screen.getByRole('button');
        expect(heading).toBeInTheDocument();
    })

    it("Should load input inside contact us component",() => {
        render(<Contact/>);
        const heading = screen.getByPlaceholderText('name');
        expect(heading).toBeInTheDocument();
    })

    it("Should load 2 input inside contact us component",() => {
        render(<Contact/>);
        const heading = screen.getAllByRole('textbox');
        expect(heading.length).toBe(2);
    })
})
