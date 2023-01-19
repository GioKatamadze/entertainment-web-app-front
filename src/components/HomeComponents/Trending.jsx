import styled from "styled-components";

const StyledCarouselWrapper = styled.div`
    margin-left: 16px;
    width: 100%;
    height: max-content;
    h2 {
    font-size: 20px;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: -0.3125px;
    text-align: left;
    color: white;
    }
`
const StyledCarousel = styled.div`
    width: auto;
    height: max-content;
`


export const Trending = () => {
    


    return (
        <StyledCarouselWrapper>
            <h2>Trending</h2>
            <StyledCarousel>

            </StyledCarousel>
        </StyledCarouselWrapper>
    )
}