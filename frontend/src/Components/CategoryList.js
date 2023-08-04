import GlobalStyle from "../GlobalStyle";
import { Center } from "../styles/basicStyles";
import { styled } from "styled-components";

function CategoryList(lists) {

    return (
        <>
        <GlobalStyle />
        <Box>
            <Center style={{width: "73px", height: "73px"}}> 
                <Gray>
                    <img src={lists.icon} width="35px" height="35px"/>
                </Gray>
            </Center>
            <p style={{color: "#06161C", fontSize: "15px"}}>{lists.name}</p>
        </Box>
        </>
    );
}

export default CategoryList

const Box = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Gray = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #F3F5F7;
    border-radius: 50%;
    margin-bottom: 20px;
`;  