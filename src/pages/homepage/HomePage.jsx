import StyledHomePage from "./Styles"
import Header from "components/Header/Header.jsx"
import { SearchBar } from "components/HomeComponents/SearchBar"

const Home = () => {
    return (
        <StyledHomePage>
            <Header />
            <SearchBar />
        </StyledHomePage>
    )
}

export default Home