import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchMovie } from "store/actions/movieActions.js";

import { TrendingBox, StyledCarouselWrapper, StyledCarousel, CarouselItem } from './styles';
import NavMovies from "svg/NavMovies";
import BookmarkEmpty from "svg/BookmarkEmpty";


export const Recommended = (props) => {
    const movies = useSelector((state) => state.movies.items);
    const dispatch = useDispatch();

    const CustomCarouselItem = movies.map((movie) => {
        return (
            <CarouselItem 
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
            </CarouselItem>
            
        )
    });

    useEffect(() => {
        dispatch(fetchMovie())
    }, [dispatch]);

    return (
        <TrendingBox>
            <h2>Recommended for you</h2>
            <StyledCarouselWrapper>
                <StyledCarousel>
                    {CustomCarouselItem}
                </StyledCarousel>
            </StyledCarouselWrapper>
        </TrendingBox>

    )
}