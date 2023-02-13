import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};

    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: .7rem 1.2rem;

    cursor: pointer;

    transition: color 0.1s, background-color 0.2s;

    font-weight: 600;
    line-height: 16px;
    :hover {
        background-color: ${(props) => props.theme.purpleBlack};
    }
`