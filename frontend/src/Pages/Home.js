import React from "react";
import GlobalStyle from "../GlobalStyle";
import { styled } from "styled-components";
import { Container, Title, Center } from "../styles/basicStyles";
import { CiSearch } from "react-icons/ci"
import CategoryList from "../Components/CategoryList";
import BestProduct from "../Components/BestProduct";


function Home() {
    const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUzMzP///8dHR3Nzc0tLS1fX18gICAmJia7u7vX19c1NTWRkZF6enrKysowMDAsLCwZGRn09PTq6uqcnJyoqKhhYWFVVVVHR0c6Ojpvb29BQUF1dXXf39+MjIzm5ubw8PDb29uCgoK+vr6rq6vRNKInAAAExElEQVR4nO3dXXeiOhSA4SQD2UJIQhRF7HQYzvz//3hAa0U+xHY5S/ee/d72hmcREkRLhFwqJKsi2+7KvXil9uVumxWrJCwev7j519qaWCkN3jn3bNOg9og8aKViY+tvC22WKoieTVkoApVm9jvCYFLtX+3ETee8Ts3scJ0Rro0GHLxTDrRZf0W4AXj2MX85gM3dQlvqZx/ut9Ll1PU4FoYqxzQ++7m8Gl+OI2FywDdAL8EhWRIWL7883C6C4rbQKKwj9JxT5pawUc8+wAekmnnhG845dJh+mxM2NIAtsZkWGgpD9FT/WrwICzrAlliMhQmq+9ClHCRDYTjgXgeHRYcwEFaY72SmgupaaPNnH9HDy+2VsKR0EZ5yZV+4obIS9tObi3BN7SI8BetPoSEqNGdhoDhGu3T4EBI9hR8nsROm9CbSUy49CS3VQdoOU3sUZv7ZB/LX8lknrMkO0m6Y1q3QUvrUNEzZVkh2Ju1qZ1MhY1ofm66LYikC5UHaDtMgEuLCRKzoroZdeiUKyhNNO9UUgvB63+UzsaW73ne5rdgRF+4EwSc0/VwpXuuHQI+Puo/jOI7jOI7jOI7juMcXKe2ifs6j/0VyP6/iH3JYsidD9Ho7+hF9F5XvFHxeTfqk/EHie6HW93vaR0PodfVzzkdBCJDNnj8KQp83N84ffiHk2a/bPtRCB76Z+ZdHGkLw74vnD7MQ9Psd5w+vEMDc/v9x7EJolt8CgFrodvf7cAr927ILt9CVXxikKIVC3TmN4hXq/6gLwSzDcAujr0ymKIUiJy9U4ydOxISjtxqQE/pqBAmbmJLQDd+1EYq9IiUUcP3oYrMHF9ES6lX//EH3b/DEhL65+FJ9fG5PTPi55hcH/fG9BDGh8MdnNH/Sy2sayAnjX/UfoXvfK1ETdl8VXr9mg5xwFAvxx0L8sRB/LMQfC/HHQvyxEH8sxB8L8cdC/LEQfyzEHwvxx0L8sRB/LMQfC/HHQvyxEH8sxB8L8cdC/LEQfyzEHwvxx0L8sRB/LMQfC/HHQvyxEH8sxB8L8cdC/LEQf/+AcOblUXSEwze6nHuns/uiS4vVuIzSBpoO9Dg6Z5DjOI7jOI7jOA591Pce34uSzL5gk7lS7IgLd2JLXLgVGe1nJT4TBaXHXeOgEFT255tJr0RC56nzVCoRgbgwCBlHzz6Kv1gUSyEN5akGTCu0lIepsq2wTumu+S6tW6EkvOb7THZCS3dF1PYolGSHqUvlSUh2Nj1uPdUJA9VhqsOHkOpJPO0edhSuiQrXn0K5oThO9UZehJLg0xpXyr7Q5s8+oIeX2yuhrKhdinDeOewsDAdaH6KiQxgIZQKULkUHiRwKZUHpU5S67N/X2wXO0CGq3k6h/X3uGiqrom7ktFC+0SDqq02Xr/cqbCgMVNXIeWF7LWKfUZ0a7NY73G+yANzrYjTaBXUolMkB890NHJIhaCSUocqxjlSXV+Ntz8fC9ja8xDmn6tJOaKaE7edFwDdUATaTlmmhXBuN6j7VgTYzu9bPCNvL0aTa40A6r1MzvgCXhG02S9XLLx4RqDSbuv7uEUpZWxMrpcE792qnsz0iD1qp2Nj6puG2sCskqyLb7srX+mnRvtxts2KVzA7Oz/4Hrew3Gq+QYfQAAAAASUVORK5CYII="
    const lists = [
        [1, "과일", "../img/fruit.svg"],
        [1, "채소", "../img/vegetable.svg"],
        [1, "유제품", "../img/diary.svg"],
        [1, "고기", "../img/meat.svg"]
    ]
    //반복 함수. v로 읽음.
    const CateList = lists.map((v) => (<CategoryList name={v[1]} icon={v[2]}/>))
    const BestList = lists.map((v) => (<BestProduct name={v[1]} icon={v[2]}/>))
    
    return (
        <> 
        <GlobalStyle />
            <div style={{
                width: "100%", backgroundColor: "#F3F5F7",
                height: "236px", position: "relative",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
            }}>
                <Container>
                    <InputBox>
                        <CiSearch 
                            size="20"
                            color="#23AA49"
                            style={{
                                marginLeft: "16px",
                            }}/>
                        <form style={{
                            width: "90%"}}>
                            <Search 
                                placeholder="상품 검색"
                            />
                        </form>
                    </InputBox>
                    <div style={{backgroundColor: "blue", width: "100%", height: "19vh"}}>
                            
                    </div>
                    <Center style={{flexDirection: "column", marginBottom: "10px"}}>
                        <Center className="CategoryBox">
                            <Title>
                                <Ttitle>상품 목록😋</Ttitle>
                                <More href="/signup">더 보기</More>
                            </Title>
                        </Center>
                        <Center className="Category" style={{height: "110px"}}>
                            {CateList}
                        </Center>
                    </Center>
                    <Center style={{flexDirection: "column"}}>
                        <Center className="CategoryBox">
                            <Title>
                                <Ttitle>인기 상품🔥</Ttitle>
                                <More href="/signup">더 보기</More>
                            </Title>
                        </Center>
                        <Center className="Bestlist" style={{display: "flow" }}>
                            {BestList}
                        </Center>
                    </Center>

                </Container>
            </div>
        </>
    );
}

export default Home;

const Search = styled.input`
    width: 90%;
    height: 50px;
    border: none;
    text-indent: 5px;
    font-size: 16px;
    color: #979899;
    outline: none;

    &:hover {
        background-color: #FAFAFA
    }
`;

const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 50px;
    border-radius: 67px;
    position: relative;
    margin-top: 30px;
    margin-bottom: 24px;
    background-color: white;
`;

const Ttitle = styled.p`
    font-size: 18px;
    font-weight: bolder;
    color: #06161C;
`;

const More = styled.a`
    font-size: 15px;
    color: #23AA49;
    text-decoration: none;
`;