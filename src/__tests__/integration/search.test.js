import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../../components/Body";
import MOCK_DATE from '../../mock/mockResList.json';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(MOCK_DATE);
            }
        }
    )
})


it("Should Search resList for Chinese test input", async () => {
    await act( async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const searchBtn = screen.getByRole('button', {name: 'Search'});
    expect(searchBtn).toBeInTheDocument();
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, {target: {value: 'Chinese'}});
    fireEvent.click(searchBtn);
    const resCard = screen.getAllByTestId('resCard');
    expect(resCard.length).toBe(1);
})


it('Should Top rated res button gave all res above 4 rating', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const topRatedResBtn = screen.getByRole('button', {name: /top rated/i})
    expect(topRatedResBtn).toBeInTheDocument();
    fireEvent.click(topRatedResBtn);
    const resList = screen.getAllByTestId('resCard');
    expect(resList.length).toBe(8);
})