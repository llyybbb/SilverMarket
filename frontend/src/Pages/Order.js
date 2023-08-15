import { useState, useCallback } from "react";
import GlobalStyle from "../GlobalStyle";
import { Header, HeaderText, Container, Input, InputTitle } from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";
import { styled } from "styled-components";

function Order() {
    const detail = {
        bank: "농협",
        account: "352-29900251-83",
        name: "판매자"
    }

    const [name, setName] = useState(""); 
    const [phone, setPhone] = useState("");
    const [addr, setAdder] = useState("");
    const [account, setAccount] = useState("");

    // 메시지
    const [nameMsg, setNameMsg] = useState("");
    const [phoneMsg, setPhoneMsg] = useState("");
    const [addrMsg, setAddrMsg] = useState("");
    const [accMsg, setAccMsg] = useState("");

    // 유효성 검사
    const [isNameValid, setIsNameValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isAddrValid, setIsAddrValid] = useState(false);
    const [isAccValid, setIsAccValid] = useState(false);


    // 이름
    const onChangeName = useCallback(async(e) => {
        const currName = e.target.value;
        setName(currName);

        if(currName.length < 2 || currName.length > 20) {
            setNameMsg("1글자 이상 9글자 미만으로 입력해주세요.")
            setIsNameValid(false)
        } else {
            setNameMsg("")
            setIsNameValid(true)
        }
    })

    // 휴대전화
    const onChangePhone = (getNumber) => {
        const currPhone = getNumber;
        setPhone(currPhone);
            const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;

        if(!phoneRegExp.test(currPhone)) {
            setPhoneMsg("숫자만 입력해주세요.");
            setIsPhoneValid(false);
        } else {
            setPhoneMsg("");
            setIsPhoneValid(true);
        }
    };


    const addHyphen = (e) => {
        const currNumber = e.target.value;
        setPhone(currNumber);
        if(currNumber.length == 3 || currNumber.length == 8) {
            setPhone(currNumber + "-");
            onChangePhone(currNumber + "-");
        } else {
            onChangePhone(currNumber);
        }
    }

    // 주소
    const onChangeAddr = useCallback(async(e) => {
        const currAddr = e.target.value;
        setAdder(currAddr);

        if(currAddr.length < 1) {
            setAddrMsg("1글자 이상 입력해주세요.");
            setIsAddrValid(false);
        } else {
            setAddrMsg("");
            setIsAddrValid(true);
        }
    })

    // 입금자명
    const onChangeAcc = useCallback(async(e) => {
        const currName = e.target.value;
        setAccount(currName);

        if(currName.length < 2 || currName.length > 20) {
            setAccMsg("1글자 이상 9글자 미만으로 입력해주세요.")
            setIsAccValid(false)
        } else {
            setAccMsg("")
            setIsAccValid(true)
        }
    })

    return(
        <>
        <GlobalStyle />
        <Header>
            <GoChevronLeft style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "1.5rem", height: "1.5rem"
            }}/>
            <HeaderText>구매</HeaderText>
        </Header>
        <Container style={{
            paddingTop: "0px", 
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.08)",
            marginBottom: "10px"
        }}>
            <form>
                <InputBox>
                    <InputTitle htmlFor="name">이름*</InputTitle>
                    <Input 
                        onChange={onChangeName}
                        className="inputName"
                        name="name"
                        type="text"
                        placeholder=""
                    />
                    <P>{nameMsg}</P>
                </InputBox>
                <InputBox>
                    <InputTitle htmlFor="phone">휴대폰*</InputTitle>
                    <Input 
                        onChange={addHyphen}
                        className="inputPhone"
                        name="phone"
                        type="text"
                        placeholder=""
                    />
                    <P>{phoneMsg}</P>
                </InputBox>
                <InputBox>
                    <InputTitle htmlFor="addr">배송주소*</InputTitle>
                    <Input 
                        onChange={onChangeAddr}
                        className="inputAddr"
                        name="addr"
                        type="text"
                        placeholder=""
                    />
                    <Input 
                        // onChange={onChangeAddr}
                        // className="inputAddr"
                        // name="addr"
                        // type="text"
                        placeholder="상세주소"
                    />
                    <P>{addrMsg}</P>
                </InputBox>
                <InputBox>
                    <InputTitle htmlFor="name">입금자명*</InputTitle>
                    <Input 
                        onChange={onChangeAcc}
                        className="inputName"
                        name="name"
                        type="text"
                        placeholder=""
                    />
                    <P>{accMsg}</P>
                </InputBox>
            </form>
        </Container>
        <Container style={{
            padding: "0px",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.08)",
            marginBottom: "10px"
        }}>
        <InfoBox>
                <p style={{
                    fontSize: "1.2rem", fontWeight: "bolder", marginBottom: "15px"
                }}>
                    거래계좌
                </p>
                <P style={{
                    marginBottom: "20px", fontWeight: "bold"
                }}>* 입금 확인 후 상품이 준비됩니다.</P>
                <InnerBox>
                    <InfoN>농협</InfoN>
                    <InfoC>{detail.bank}</InfoC>
                </InnerBox>
                <InnerBox>
                    <InfoN>계좌번호</InfoN>
                    <InfoC>{detail.account}</InfoC>
                </InnerBox>
                <InnerBox>
                    <InfoN>이름</InfoN>
                    <InfoC>{detail.name}</InfoC>
                </InnerBox>
            </InfoBox>
        </Container>
        <Container style={{paddingTop: "30px"}}>
            <BuyBtn>
                구매하기
            </BuyBtn>
        </Container>
        </>
    )
}

export default Order;

const InputBox = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

const P = styled.p`
    font-size: 0.85rem;
    color: red;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    padding: 15px;

`;

const InnerBox = styled.div`
    display: flex;
    margin-bottom: 7px;
`;

const InfoN = styled.p`
    width: 23%;
    margin-right: 20px;
    font-weight: bold;
`;

const InfoC = styled.p`
    width: 77%;
`;

const BuyBtn = styled.button`
    width: 70%;
    height: 13vw;
    border-radius: 100px;
    border: none;
    color: white;
    font-size: 1.2rem;
    background-color: #23AA49;
`;
