import { act, fireEvent, render, screen } from "@testing-library/react"
import Menu from '../../components/Menu.js'
import MOCK_DATA from '../../mock/mockRestMenu.json'
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import appStore from '../../redux/appStore.js'
import Header from '../../components/Header.js'
import { BrowserRouter } from "react-router-dom";
import Cart from '../../components/Cart.js'


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}))

it("Should render Restaurant the Menu Component", async ()=>{
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <Menu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ))
    const recommendedPannel = screen.getByText(/Recommended/);
    expect(recommendedPannel).toBeInTheDocument();
    fireEvent.click(recommendedPannel);
    const addButton = screen.getAllByRole('button', {name: /add/i});
    expect(addButton.length).toBe(20);
    const addBtns = screen.getAllByRole('button', {name: /add/i});
    fireEvent.click(addBtns[0]);
    const cartBtn = screen.getByText('Cart (1 items)');
    expect(cartBtn).toBeInTheDocument();
    fireEvent.click(addBtns[0]);
    const cartBtn1 = screen.getByText('Cart (2 items)');
    expect(cartBtn1).toBeInTheDocument();
    const cartAndList = screen.getAllByRole('button', {name: /add/i});
    expect(cartAndList.length).toBe(22);
    const clearCart = screen.getByRole('button', {name:/clear/i});
    fireEvent.click(clearCart);
    const cartAndList2 = screen.getAllByRole('button', {name: /add/i});
    expect(cartAndList2.length).toBe(20);
})