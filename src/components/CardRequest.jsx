import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-cntent: center;
  align-items: flex-start;
  padding: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 1), 0 0 10px 0 rgba(0, 0, 0, 0.3), 0 0 30px 0 rgba(0, 0, 0, 0.15);
`;

const CardRequest = ({ requestData }) => (
  <Wrap>
    <h3>{requestData.userName}</h3>
    <h3>{requestData.userSurname}</h3>
    <h3>{requestData.userPhone}</h3>
    <h3>{requestData.userMail}</h3>
    <h3>{requestData.userBday}</h3>
  </Wrap>
);

export default CardRequest;
