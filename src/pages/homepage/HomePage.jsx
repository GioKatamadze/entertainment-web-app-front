import { StyledHomePage, Dashboard } from "./Styles"
import Header from "components/Header/Header.jsx"
import { SearchBar } from "components/HomeComponents/SearchBar"
import { Trending } from "components/HomeComponents/Trending/Trending"

const Home = () => {
    return (
        <StyledHomePage>
            <Header />
            <Dashboard>
                <SearchBar />
                <Trending />
            </Dashboard>
        </StyledHomePage>
    )
}

export default Home