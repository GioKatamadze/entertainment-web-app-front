import styled from "styled-components";

export const StyledHomePage = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #10141E;
    @media (min-width: 1440px) {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;
    }
`

export const Dashboard = styled.div`
    width: 90%;
    height: 100%;
    background-color: #10141E;
    @media (min-width: 1440px) {
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
`