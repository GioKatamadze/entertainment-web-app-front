import styled from "styled-components"
import SearchIcon from "svg/SearchIcon.jsx"

const StyledSearchBar = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    width: 100vw;
    height: 55px;
    .icon {
        width: 32px;
        height: 32px;
        margin-left: 10px;
        transform: scale(0.7);
    }
    input {
        flex-grow: 1;
        width: auto;
        height: 100%;
        border: none;
        outline: none;
        background-color: #10141E;
        color: white;
        font-family: Outfit;
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        ::placeholder{
            font-size: 16px;
            font-weight: 300;
            line-height: 20px;
            letter-spacing: 0px;
            text-align: left;
            color: #ffffff7d;
        }
    }

    @media (min-width: 768px) {
        .icon {
            margin-left: 25px;
            transform: scale(1);
        }
        input {
            margin-left: 15px;
            font-size: 24px;
            line-height: 30px;
            ::placeholder{
                font-size: 24px;
                line-height: 30px;
            }
        }
    }

    @media (min-width: 1440px) {
        margin-top: 32px;
        width: 90%;
        height: 100px;
        .icon {
            margin-left: 0;
            transform: scale(1);
        }
        input {
            margin-left: 15px;
            font-size: 24px;
            line-height: 30px;
            ::placeholder{
                font-size: 24px;
                line-height: 30px;
            }
        }
    }
`

export const SearchBar = () => {
    return (
        <StyledSearchBar>
            <div className="icon">
                <SearchIcon />
            </div>
            
            <input 
                type="text"
                placeholder="Search for movies or TV series"
            />
        </StyledSearchBar>
    )
}