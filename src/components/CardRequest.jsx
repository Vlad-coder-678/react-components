import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 300px;
  max-width: 300px;
  flex-direction: column;
  justify-cntent: center;
  align-items: flex-start;
  padding: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 1), 0 0 10px 0 rgba(0, 0, 0, 0.3), 0 0 30px 0 rgba(0, 0, 0, 0.15);
  margin: 10px;
  background-color: #f2f2f2;
  overflow: hidden;
`;

const CardRequest = ({ requestData }) => (
  <Wrap>
    <h3>{requestData.userName}</h3>
    <h3>{requestData.userMail}</h3>
    <h3>{requestData.userPhone}</h3>
    <h3>{requestData.userBday}</h3>
    <h3>{requestData.userSity}</h3>
    <h3>{requestData.userChecked}</h3>
    <h3>{requestData.userChoice}</h3>
    <h3>{requestData.userCase}</h3>
  </Wrap>
);

export default CardRequest;
