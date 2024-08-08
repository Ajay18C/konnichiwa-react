import { fireEvent, render, screen } from "@testing-library/react";
import Header from '../../components/Header';
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it("Should render the header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByRole('button',{name: 'Login'})).toBeInTheDocument();
})


it("Should render the header component with Cart item 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    expect(screen.getByText('Cart (0 items)')).toBeInTheDocument();
})

test("Should render the header component with Cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    expect(screen.getByText(/Cart/)).toBeInTheDocument();
})

it("Should toggle login and logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole('button', {name: 'Login'});
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', {name: 'Logout'});
    expect(logoutButton).toBeInTheDocument();
})