import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 1%;
    width: 100%;
    margin: 0 auto;
    padding: 2.6rem 0 0 0;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    border: 1.5px solid #BCC6BF;
    border-radius: 8px;
    text-indent: 5px;
    font-size: 1rem;
    outline: none;

    &:focus {
        border-color: #23AA49;
        outline: none;
    }
`;

export const Text = styled.p`
    font-size: 16px;
    padding: 0.3rem 0.3rem 0.3rem 0;
`;

export const Header = styled.div`
    display: flex;
    padding-left: 10px;
`;