import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 1), 0 0 10px 0 rgba(0, 0, 0, 0.3), 0 0 30px 0 rgba(0, 0, 0, 0.15);

  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 1), 0 0 25px 0 rgba(0, 0, 0, 0.3), 0 0 50px 0 rgba(0, 0, 0, 0.15);
  }
  &:active {
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 1), 0 0 10px 0 rgba(0, 0, 0, 0.3), 0 0 30px 0 rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const AvaWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px;
`;

const Ava = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AuthorDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const AuthorName = styled.h3`
  font-size: 24px;
  color: blue;
`;

const AuthorStatus = styled.p`
  color: #aaa;
`;

const CardBody = styled.div`
  width: 98%;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;

  h3 {
    text-align: center;
    text-transform: uppercase;
    margin: 5px;
  }

  p {
    margin: 5px;
  }
`;

const WrapImg = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const CardComponent = ({ data }) => (
  <Card>
    <CardHeader>
      <AvaWrap>
        <Ava src={data.avaPath} alt={data.avaAlt} />
      </AvaWrap>
      <AuthorDesc>
        <AuthorName>{data.author}</AuthorName>
        <AuthorStatus>{data.status}</AuthorStatus>
      </AuthorDesc>
    </CardHeader>
    <CardBody>
      <h3>{data.title}</h3>
      <WrapImg>
        <Img src={data.imagePath} alt={data.imageAlt} />
      </WrapImg>
      <p>{data.text}</p>
    </CardBody>
    <CardFooter>
      <FooterLeft>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z" />
        </svg>
        <div>{data.views}</div>
      </FooterLeft>
      <FooterRight>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M21.216 8h-2.216v-1.75l1-3.095v-3.155h-5.246c-2.158 6.369-4.252 9.992-6.754 10v-1h-8v13h8v-1h2l2.507 2h8.461l3.032-2.926v-10.261l-2.784-1.813zm.784 11.225l-1.839 1.775h-6.954l-2.507-2h-2.7v-7c3.781 0 6.727-5.674 8.189-10h1.811v.791l-1 3.095v4.114h3.623l1.377.897v8.328z" />
        </svg>
        <div>{data.likes}</div>
      </FooterRight>
    </CardFooter>
  </Card>
);

export default CardComponent;
