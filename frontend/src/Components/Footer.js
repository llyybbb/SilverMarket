import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { GoHomeFill, GoHeartFill, GoPersonFill } from "react-icons/go";
import { FaBox } from "react-icons/fa";

function Footer() {

    const icon = [
        { id: 1, url: '../img/banner1.svg' },
        { id: 2, url: '../img/banner2.svg' },
        { id: 3, url: '../img/banner1.svg' },
        { id: 4, url: '../img/banner2.svg' },
      ];

    return (
        <>

        <GlobalStyle />
        <Box>
            <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                width: "85%", height: "100%", 
            }}>
            <GoHomeFill 
                size="40px"
                color="#23AA49"/>
            <GoHeartFill 
                size="40px"
                color="#DBDBDB"/>
            <FaBox 
                size="30px"
                color="#DBDBDB"/>
            <GoPersonFill 
                size="40px"
                color="#DBDBDB"/>
            </div>
        </Box>
        </>
    );
}

export default Footer;

const Box = styled.div`
    width: 100%;
    height: 64px;
    background-color: white;
    position: fixed;
    bottom: 0px;
    box-shadow: 0px -5px 37px rgba(0, 0, 0, 0.09);
    display: flex;
    justify-content: center;
    align-items: center;
`;