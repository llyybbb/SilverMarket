import GlobalStyle from "../GlobalStyle";
import { Center } from "../styles/basicStyles";
import { styled } from "styled-components";

function BestProduct(lists) {

    const BackIcon = styled.div`
        /* background-image: url({lists.icon}); */
        width: 100%;
        height: 100%;
    `;
    return (
        <>
        <GlobalStyle />
        <Box>
            <BestCenter> 
                <img src={lists.icon} width="60px" height="60px"/>
            </BestCenter>
            <p>{lists.name}</p>
        </Box>
        </>
    );
}
export default BestProduct

const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BestCenter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;