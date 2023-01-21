import { StyledHomePage, Dashboard } from "./Styles"
import Header from "components/Header/Header.jsx"
import { SearchBar } from "components/HomeComponents/SearchBar"
import { Trending } from "components/HomeComponents/Trending/Trending"
import { Recommended } from "components/HomeComponents/Recommended/Recommended"

const Home = () => {
    return (
        <StyledHomePage>
            <Header />
            <Dashboard>
                <SearchBar />
                <Trending />
                <Recommended />
            </Dashboard>
        </StyledHomePage>
    )
}

export default Home