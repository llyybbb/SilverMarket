import GlobalStyle from "../GlobalStyle";
import { styled } from "styled-components";

function BestProduct(lists) {
    const onClick = () => {
        alert("클릭!")
    }

    return (
        <>
        <GlobalStyle />
        <Box>
            <ImgButton onClick={onClick}> 
                <img src={lists.icon} width="100%" height="80%" alt="best"/>
            </ImgButton>
            <InfoButton>
                <Info>{lists.name}</Info>
                <p style={{
                    paddingLeft: "5px",
                    color: "#FF324B",
                    fontSize: "17px",
                    fontWeight: "bold"
                }}>5,000₩</p>
            </InfoButton>
        </Box>
        </>
    );
}
export default BestProduct

const Box = styled.div`
    width: 42vw;
    height: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    float: left;
    margin-left: 16px;
    margin-bottom: 16px;
    background-color: #F3F5F7;
    border-radius: 16px;
`;

const ImgButton = styled.button`
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-bottom: 5px;
    border: none;
    background-color: transparent;
`;

const InfoButton = styled.button`
    width: 100%;
    height: 35%;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
`;

const Info = styled.p`
    font-size: 16px;
    font-weight: bolder;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    word-wrap : break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 0 5px 0 5px;
    word-break:keep-all
`;
