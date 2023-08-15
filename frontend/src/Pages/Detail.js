import { styled } from "styled-components"
import GlobalStyle from "../GlobalStyle"
import { Header, Container } from "../styles/basicStyles"
import { GoChevronLeft, GoSearch, GoHeartFill } from "react-icons/go";
import DetailSlider from "../Components/DetailSlider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Detail() {
    const detail = {
        slideimg: [
            { id: 1, url: '../img/banner1.svg' },
            { id: 2, url: '../img/banner2.svg' },
            { id: 3, url: '../img/banner1.svg' },
            { id: 4, url: '../img/banner2.svg' },
        ],
        img: "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        name: "김예은",
        product: "수입생강 세척생강 1kg",
        price: "11,000₩",
        origin: "국내산",
        comp: "생강",
        totalW: "1kg",
        perW: "1kg",
        more: "어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각 어찌구 저찌구 이건 맛난 생강임 야호 유후 생각 생강 생각 생강 생각 생각 생강 생각 생강 생각"

    }

    const navigate = useNavigate();
    const onBuyClick = () => {
        navigate("/order")
    }

    const [select, setSelect] = useState(true);
    
    const handleFavo = () => {
        setSelect((prev) => !prev)
        console.log(select)
    }

    // const onClick = (func) => {
    //     if( func === "back") {
    //         alert("뒤로 가기")
    //     }
    //     else if( func === "search") {
    //         alert("검색")
    //     }
    // }

    return(
        <>
        <GlobalStyle />
        <Header style={{
            justifyContent: "space-between", 
            padding: "2.6rem 35px 10px 30px"}}>
            <DetailButton>
                <GoChevronLeft style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: "1.5rem", height: "1.5rem"
                }}/>
            </DetailButton>
            <DetailButton>
                <GoSearch style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: "1.3rem", height: "1.3rem"
                }}/>
            </DetailButton>
        </Header>
        <Container style={{paddingTop: "0px"}}>
            <DetailSlider />
            <SellerBox>
                <Img src={detail.img} />
                <p className="name" 
                    style={{
                        fontSize: "1.1rem"
                }}>
                    {detail.name}
                </p>
            </SellerBox>
            <TopBox>
                <p className="product"
                    style={{
                        fontSize: "1.5rem", fontWeight: "bolder",
                        marginBottom: "10px", lineHeight: "110%"
                    }}>
                    {detail.product}
                </p>
                <p className="price"
                    style={{
                        fontSize: "1.2rem", color: "#FF324B",
                        fontWeight: "bold"
                    }}>
                    {detail.price}
                </p>
            </TopBox>
            <InfoBox>
                <p style={{
                    fontSize: "1.2rem", fontWeight: "bolder", marginBottom: "15px"
                }}>
                    판매 정보
                </p>
                <InnerBox>
                    <InfoN>원산지</InfoN>
                    <InfoC>{detail.origin}</InfoC>
                </InnerBox>
                <InnerBox>
                    <InfoN>구성</InfoN>
                    <InfoC>{detail.comp}</InfoC>
                </InnerBox>
                <InnerBox>
                    <InfoN>총 중량</InfoN>
                    <InfoC>{detail.totalW}</InfoC>
                </InnerBox>
                <InnerBox>
                    <InfoN>개당 중량</InfoN>
                    <InfoC>{detail.perW}</InfoC>
                </InnerBox>
                <InnerBox>
                    <InfoN>상세 설명</InfoN>
                    <InfoC>{detail.more}</InfoC>
                </InnerBox>
            </InfoBox>
        </Container>
        <Footer>
            <button onClick={handleFavo}
                    style={{
                        backgroundColor: "transparent", border: "none",
                        height: "40%",
                    }}>
                <GoHeartFill style={{
                    height: "100%", width: "100%",
                    color: select ? "#F3F5F7" : "#23AA49"
                }}/>
            </button>
            <BuyBtn onClick={onBuyClick}>
                구매하기
            </BuyBtn>
        </Footer>
        </>
    )
}

export default Detail

const DetailButton = styled.button`
    background-color: transparent;
    border: none;
`;

const Img = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`;

const SellerBox = styled.div`
    display: flex;
    width: 90vw;
    align-items: center;
    margin-bottom: 20px;
`;

const TopBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin-bottom: 18px;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    padding: 15px;
    border: 1px solid #F1F1F5;

`;

const InnerBox = styled.div`
    display: flex;
    margin-bottom: 7px;
`;

const InfoN = styled.p`
    width: 23%;
    margin-right: 20px;
`;

const InfoC = styled.p`
    width: 77%;
    font-weight: bold;
`;

const Footer = styled.div`
    width: 100%;
    height: 85px;
    background-color: white;
    position: fixed;
    bottom: 0px;
    /* box-shadow: 0px -5px 37px rgba(0, 0, 0, 0.09); */
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const BuyBtn = styled.button`
    width: 70%;
    height: 60%;
    border-radius: 100px;
    border: none;
    color: white;
    font-size: 1.2rem;
    background-color: #23AA49;
`;

