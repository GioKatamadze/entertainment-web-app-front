import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchMovie } from "store/actions/movieActions.js";

import { TrendingBox, StyledCarouselWrapper, StyledCarousel, CarouselItem } from "./TrendingStyles.jsx";
import NavMovies from "svg/NavMovies";
import BookmarkEmpty from "svg/BookmarkEmpty";


export const Trending = (props) => {
    const movies = useSelector((state) => state.movies.items);
    const trendingMovies = movies.filter((item) => item.istrending);
    const dispatch = useDispatch();

    const CustomCarouselItem = trendingMovies.map((movie) => {
        return (
            <CarouselItem 
            key={movie.title}
            >
                <div className="bookmark" >
                    <div className="bookmarkIcon" >
                        <BookmarkEmpty />
                    </div>
                </div>
                <div className="hoverWrapper" >
                    <p>Play</p>
                </div>
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
                <div className="shadow">
                </div>
                <img src={process.env.REACT_APP_API_URL + "/trending/" + movie.thumbnail + ".jpg"} />
            </CarouselItem>
            
        )
    });

    useEffect(() => {
        dispatch(fetchMovie())
    }, [dispatch]);

    return (
        <TrendingBox>
            <h2>Trending</h2>
            <StyledCarouselWrapper>
                <StyledCarousel>
                    {CustomCarouselItem}
                </StyledCarousel>
            </StyledCarouselWrapper>
        </TrendingBox>

    )
}