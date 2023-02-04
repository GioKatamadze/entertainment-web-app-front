import styled from "styled-components"

export const StyledHeaderWrapper = styled.div`
    background-color: #10141E;
    width: 100%;
    height: 55px;
    @media (min-width: 768px) {
        width: 92%;
        height: 75px;
        padding: 25px;
    }
    @media (min-width: 1440px) {
        position: sticky;
        top: 0;
        left: 0;
        width: 10%;
        height: 100vh;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const StyledHeader = styled.div`
    background-color: #161D2F;
    width: auto;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .logo {
        margin-left: 16px;
        transform: scale(0.8);
    }
    .logo:hover {
            cursor: pointer;
        }
    nav {
        width: max-content;
        display: flex;
        align-items: center;
        gap: 24px;
        justify-content: space-between;
        .navItem:hover, .navItem:active {
            filter: invert(42%) sepia(93%) saturate(0%) hue-rotate(87deg) brightness(119%) contrast(1119%);
        }
    }
    .user {
        width: 25px;
        height: 25px;
        margin-right: 16px;
        img {
            border: 2px solid white;
            border-radius: 100%;
            width: 25px;
            height: 25px;
        }
    }

    @media (min-width: 768px) {
        width: 100%;
        border-radius: 10px;
        height: 75px;
        .logo {
        margin-left: 24px;
        transform: scale(1);
        }
        nav {
        gap: 32px;
        }
        .user {
            width: 32px;
            height: 32px;
            margin-right: 24px;
            img {
                width: 30px;
                height: 30px;
            }
        }
    }

    @media (min-width: 1440px) {
        width: 70%;
        height: 92%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .logo {
        margin-left: 0;
        margin-top: 32px;
        }
        nav {
            flex-direction: column;
            gap: 40px;
            transform: scale(1.2) translateY(-100px);
        }
        .user {
            width: 40px;
            height: 40px;
            margin-right: 0;
            margin-bottom: 32px;
            img {
                width: 38px;
                height: 38px;
            }
        }
    }
`