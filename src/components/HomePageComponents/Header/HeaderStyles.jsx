import styled from "styled-components"

export const StyledHeaderWrapper = styled.div`
    background-color: #10141E;
    width: 100%;
    height: 55px;
    @media (min-width: 768px) {
        width: auto;
        height: 75px;
        padding: 25px;
    }
    @media (min-width: 1440px) {
        width: 10vw;
        height: 100vh;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
`
export const StyledHeader = styled.div`
    background-color: #161D2F;
    width: auto;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        margin-left: 16px;
    }
    .menu {
        width: max-content;
        display: flex;
        align-items: center;
        gap: 24px;
        justify-content: space-between;
    }
    .user {
        width: 28px;
        height: 28px;
        margin-right: 16px;
        img {
            outline: 2px solid white;
            border-radius: 100%;
            width: 27px;
            height: 27px;
        }
    }

    @media (min-width: 768px) {
        width: 100%;
        border-radius: 10px;
        height: 75px;
        .logo {
        margin-left: 24px;
        }
        .menu {
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
        width: auto;
        height: 100vh;
        margin: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .logo {
        margin-left: 0;
        margin-top: 32px;
        }
        .menu {
            flex-direction: column;
            gap: 40px;
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