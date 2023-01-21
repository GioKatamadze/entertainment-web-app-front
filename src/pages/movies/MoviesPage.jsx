import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from "store/actions/movieActions.js";
import Header from "components/Header/Header.jsx"
import NavMovies from "svg/NavMovies";
import BookmarkEmpty from "svg/BookmarkEmpty";
import SearchIcon from "svg/SearchIcon.jsx"
import { 
    StyledHomePage,
    Dashboard, 
    StyledSearchBar, 
    RecommendedBox, 
    MoviesWrapper, 
    StyledMovies, 
    MovieItem 
} from "./Styles"


const Movies = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.items);
    const categoryMovies = movies.filter(movie => {
        return movie.category === 'Movie';
      });
    const [searchResult, setSearchResult] = useState(movies);
    const [searching, setSearching] = useState(false);
    
  const handleChange = async (event) => {
    if (event.target.value === "") {
        setSearching(false)
      setSearchResult(categoryMovies);
    } else {
      const result = await categoryMovies.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResult(result);
      setSearching(true)
    }
  };

    const AllMovies = categoryMovies.map((movie) => {
        return (
            <MovieItem 
            key={movie.title}
            >
                <div className="bookmark" >
                    <div className="bookmarkIcon" >
                        <BookmarkEmpty />
                    </div>
                </div>
                <img src={process.env.REACT_APP_API_URL + "/regular/" + movie.thumbnail + ".jpg"} />
                <div className="about" >
                    <div className="details" >
                        <p>{movie.year}</p>
                        <p>・</p>
                        <div className="category" >
                            <div className="icon" ><NavMovies /></div>
                            <p>{movie.category}</p>
                        </div>
                        <p>・</p>
                        <p>{movie.rating}</p>
                    </div>
                    <h2>{movie.title}</h2>
                </div>
            </MovieItem>  
        )
    })

    const FilteredMovies = searchResult.map((movie) => {
        return (
            <MovieItem 
            key={movie.title}
            >
                <div className="bookmark" >
                    <div className="bookmarkIcon" >
                        <BookmarkEmpty />
                    </div>
                </div>
                <img src={process.env.REACT_APP_API_URL + "/regular/" + movie.thumbnail + ".jpg"} />
                <div className="about" >
                    <div className="details" >
                        <p>{movie.year}</p>
                        <p>・</p>
                        <div className="category" >
                            <div className="icon" ><NavMovies /></div>
                            <p>{movie.category}</p>
                        </div>
                        <p>・</p>
                        <p>{movie.rating}</p>
                    </div>
                    <h2>{movie.title}</h2>
                </div>
            </MovieItem>  
        )
    })

    useEffect(() => {
        dispatch(fetchMovie())
    }, [dispatch]);
    return (
        <StyledHomePage>
            <Header />
            <Dashboard>
            <StyledSearchBar>
                <div className="icon">
                    <SearchIcon />
                </div>
                <input
                    onChange={handleChange}
                    type="search"
                    placeholder="Search for movies"
                />
            </StyledSearchBar>
            <RecommendedBox>
                <h2>Movies</h2>
                <MoviesWrapper>
                    {searching ? (
                        <StyledMovies>
                            {FilteredMovies}
                        </StyledMovies>
                    ) : (
                        <StyledMovies>
                            {AllMovies}
                        </StyledMovies>
                    )}
                </MoviesWrapper>
            </RecommendedBox>
            </Dashboard>
        </StyledHomePage>
    )
}

export default Movies