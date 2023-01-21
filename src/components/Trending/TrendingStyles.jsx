import styled from "styled-components";

export const TrendingBox = styled.div`
    width: 100vw;
    h2 {
        margin: 10px auto 16px 16px;
        font-size: 20px;
        font-weight: 300;
        line-height: 25px;
        letter-spacing: -0.3125px;
        text-align: left;
        color: white;
    }
    @media (min-width: 768px) {
        h2 {
            margin: 20px auto 25px 25px;
            font-size: 32px;
            line-height: 40px;
            letter-spacing: -0.5px;
        }
    }
    @media (min-width: 1440px) {
        width: 100%;
        h2 {
            margin: 20px auto 25px auto;
        }
    }
`
export const StyledCarouselWrapper = styled.div`
    width: 100vw;
    height: max-content;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
    ::-webkit-scrollbar-track {
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        display: none;
    }

        @media (min-width: 1440px) {
            width: 100%;
            ::-webkit-scrollbar {
                width: 5px; 
                height: 12px;
                display: block;
                }
            ::-webkit-scrollbar-track {
                box-shadow: inset 0 0 1px #9c9a9aaa;
                border-radius: 5px;
                display: block;
                }

            ::-webkit-scrollbar-thumb {
                background: #9c9a9a36;
                border-radius: 10px;
                display: block;
                }
            }


        
`
export const StyledCarousel = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    margin-left: 16px;
    gap: 16px;

    @media (min-width: 768px) {
        margin-left: 25px;
        gap: 40px;
    }

    @media (min-width: 1440px) {
        margin-left: 0;
    }
`
export const CarouselItem = styled.div`
    width: 240px;
    height: 140px;
    position: relative;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 5px;
    * {
        z-index: 200;
        position: relative;
    }
    .bookmark {
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-wrap: nowrap;
    }
    .bookmarkIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px 8px auto auto;
        width: 32px;
        height: 32px;
        border-radius: 100%;
        background-color: #00000087;
    }
    h2 {
        margin: 0 auto 16px 16px;
        font-size: 15px;
        font-weight: 500;
        line-height: 19px;
        color: white;
    }
    p {
        font-size: 12px;
        font-weight: 300;
        line-height: 15px;
        color: white;
        opacity: 0.85;
    }
    img {
        position: absolute;
        border-radius: 8px;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .shadow {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: #00000062;
    }
    .details {
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        margin-left: 16px;
    }
    .category {
        height: max-content;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        gap: 3px;
        .icon {
            transform: scale(0.6);
            * {
            fill: white;
            opacity: 0.8;
            }
        }
    }

    @media (min-width: 768px) {
        width: 470px;
        height: 230px;
        h2 {
            margin: 0 auto 24px 24px;
            font-size: 24px;
            line-height: 30px;
            color: white;
        }
        p {
            font-size: 15px;
            line-height: 19px;
        }
        .details {
            margin-left: 24px;
        }
        .bookmarkIcon {
            margin: 16px 24px auto auto;
        }
    }

    @media (min-width: 1440px) {
        margin-bottom: 10px;
        h2 {
            margin: 0 auto 24px 24px;
            font-size: 24px;
            line-height: 30px;
            color: white;
        }
        p {
            font-size: 15px;
            line-height: 19px;
        }
        .details {
            margin-left: 24px;
        }
        .bookmarkIcon {
            margin: 16px 24px auto auto;
        }
    }
`