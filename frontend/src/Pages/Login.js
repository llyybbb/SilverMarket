import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";


const User = {
  email: "test2323",
  pw: "test2323@@@",
};

export default function Login() {
  const [ID, setID] = useState("");
  const [pw, setPw] = useState("");

  const [IDValid, setIDValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [Allow, setAllow] = useState(false);

  const navigate = useNavigate();

// 로그인 가능/불가능 판단
  useEffect(() => {
    if (IDValid && pwValid) {
      setAllow(false);
      return;
    }
    setAllow(true);
  }, [IDValid, pwValid]);

  // 아이디 유효성 검사
  const handleID = (e) => {
    setID(e.target.value);

    const regex = /^(?=.*[a-zA-Z0-9\W_]).{8,}$/;
    //   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (regex.test(e.target.value)) {
      setIDValid(true);
    } else {
      setIDValid(false);
    }
  };

  // 비밀번호 유효성 검사
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  // 로그인 버튼 클릭 시
  const onClickConfirmButton = () => {
    if (ID === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
    
    // 페이지 이동
    navigate("/");
  };

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>

      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="test2323"
            value={ID}
            onChange={handleID}
          />
        </div>
        <div className="errorMessageWrap">
          {!IDValid && ID.length > -1 && (
            <div>8자 이상 입력해주세요.</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="test2323@@@"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > -1 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={onClickConfirmButton}
          disabled={Allow}
          className="bottomButton"
        >
          확인
        </button>
      </div>
    </div>
  );
}
