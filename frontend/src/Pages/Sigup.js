import React, { useState } from "react";
import { Header } from "../styles/basicStyles";
import GlobalStyle from "../GlobalStyle";

function Signup() {
 // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
 const [id, setId] = React.useState("");
 const [name, setName] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [passwordConfirm, setPasswordConfirm] = React.useState("");
 const [email, setEmail] = React.useState("");
 const [phone, setPhone] = React.useState("");
 const [addr, setAdder] = React.useState("");
 const [gender, setGender] = React.useState("");
 const [birth, setBirth] = React.useState("");

 // 오류메세지 상태 저장
 const [idMessage, setIdMessage] = React.useState("");
 const [nameMessage, setNameMessage] = React.useState("");
 const [passwordMessage, setPasswordMessage] = React.useState("");
 const [passwordConfirmMessage, setPasswordConfirmMessage] = React.useState("");
 const [emailMessage, setEmailMessage] = React.useState("");
 const [phoneMessage, setPhoneMessage] = React.useState("");
 const [birthMessage, setBirthMessage] = React.useState("");

 // 유효성 검사
 const [isId, setIsId] = React.useState(false);
 const [isname, setIsName] = React.useState(false);
 const [isPassword, setIsPassword] = React.useState(false);
 const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
 const [isEmail, setIsEmail] = React.useState(false);
 const [isPhone, setIsPhone] = React.useState(false);
 const [isBirth, setIsBirth] = React.useState(false);

 const onChangeId = (e) => {
   const currentId = e.target.value;
   setId(currentId);
   const idRegExp = /^(?=.*[a-zA-Z0-9\W_]).{8,}$/;

   if (!idRegExp.test(currentId)) {
     setIdMessage("대소문자 또는 숫자의 구성으로 8자 이상 입력해주세요");
     setIsId(false);
   } else {
     setIdMessage("사용가능한 아이디 입니다.");
     setIsId(true);
   }
 };

 const onChangeName = (e) => {
   const currentName = e.target.value;
   setName(currentName);

   if (currentName.length < 2 || currentName.length > 20) {
     setNameMessage("이름은 2글자 이상 입력해주세요!");
     setIsName(false);
   } else {
     setNameMessage("사용가능한 이름입니다.");
     setIsName(true);
   }
 };

 const onChangePassword = (e) => {
   const currentPassword = e.target.value;
   setPassword(currentPassword);
   const passwordRegExp =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
   if (!passwordRegExp.test(currentPassword)) {
     setPasswordMessage(
       "영문, 숫자, 특수문자 포함 8자 이상 입력해주세요!"
     );
     setIsPassword(false);
   } else {
     setPasswordMessage("");
     setIsPassword(true);
   }
 };
 const onChangePasswordConfirm = (e) => {
   const currentPasswordConfirm = e.target.value;
   setPasswordConfirm(currentPasswordConfirm);
   if (password !== currentPasswordConfirm) {
     setPasswordConfirmMessage("올바른 비밀번호를 입력해주세요.");
     setIsPasswordConfirm(false);
   } else {
     setPasswordConfirmMessage("");
     setIsPasswordConfirm(true);
   }
 };
 const onChangeEmail = (e) => {
   const currentEmail = e.target.value;
   setEmail(currentEmail);
   const emailRegExp =
     /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

   if (!emailRegExp.test(currentEmail)) {
     setEmailMessage("이메일의 형식이 올바르지 않습니다!");
     setIsEmail(false);
   } else {
     setEmailMessage("");
     setIsEmail(true);
   }
 };
 const onChangePhone = (getNumber) => {
   const currentPhone = getNumber;
   setPhone(currentPhone);
   const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

   if (!phoneRegExp.test(currentPhone)) {
     setPhoneMessage("올바른 형식이 아닙니다!");
     setIsPhone(false);
   } else {
     setPhoneMessage("");
     setIsPhone(true);
   }
 };

 const addHyphen = (e) => {
   const currentNumber = e.target.value;
   setPhone(currentNumber);
   if (currentNumber.length == 3 || currentNumber.length == 8) {
     setPhone(currentNumber + "-");
     onChangePhone(currentNumber + "-");
   } else {
     onChangePhone(currentNumber);
   }
 };


 

 const onChangeBirth = (e) => {
   const currentBirth = e.target.value;
   setBirth(currentBirth);
 };

 return (
   <>
    <GlobalStyle />
     <Header>회원가입</Header>
     <div className="form">
       <div className="form-el">
         <label htmlFor="id">Id</label> <br />
         <input id="id" name="id" value={id} onChange={onChangeId} />
         <p className="message"> {idMessage} </p>
       </div>

       <div className="form-el">
         <label htmlFor="name">Nick Name</label> <br />
         <input id="name" name="name" value={name} onChange={onChangeName} />
         <p className="message">{nameMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="password">Password</label> <br />
         <input
           id="password"
           name="password"
           value={password}
           onChange={onChangePassword}
         />
         <p className="message">{passwordMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="passwordConfirm">Password Confirm</label> <br />
         <input
           id="passwordConfirm"
           name="passwordConfirm"
           value={passwordConfirm}
           onChange={onChangePasswordConfirm}
         />
         <p className="message">{passwordConfirmMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="email">Email</label> <br />
         <input
           id="email"
           name="name"
           value={email}
           onChange={onChangeEmail}
         />
         <p className="message">{emailMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="phone">Phone</label> <br />
         <input id="phone" name="phone" value={phone} onChange={addHyphen} />
         <p className="message">{phoneMessage}</p>
       </div>
       <div className="form-el">
         <label htmlFor="birth">Birth</label> <br />
         <input
          type="checkbox"
           id="birth"
           name="birth"
           value={birth}
           onChange={onChangeBirth}
         />
         <p className="message">{birthMessage}</p>
       </div>
       <br />
       <br />
       <button type="submit">Submit</button>
     </div>
   </>
 );
};

export default Signup;