import { render, screen } from "@testing-library/react"
import ResturantCard from "../../components/ResturantCard"
import MOCK_DATA from '../../mock/resCardMock.json'
import '@testing-library/jest-dom'

it("Should render restaurant card data with props data", () =>{
    render(<ResturantCard resData={MOCK_DATA}/>);
    const name = screen.getByText('Pizza Box');
    expect(name).toBeInTheDocument();
})