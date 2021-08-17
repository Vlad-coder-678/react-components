import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { iconCorrect, iconError } from '../data/iconsData';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;

  span {
    color: red;
    margin-left: 5px;
  }
`;

// eslint-disable-next-line object-curly-newline
const InputEmailComponent = ({ userMail, setUserMail, isSubmit, setIsSubmit }) => {
  const [validMail, setValidMail] = useState();
  const [onBlurMail, setOnBlurMail] = useState();

  const onBlurInputMail = (e) => {
    setOnBlurMail(true);
    setValidMail(e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
  };

  const onInputMail = (e) => {
    setUserMail(e.target.value);
    setValidMail(e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
  };

  useEffect(() => {
    setOnBlurMail();
  }, [isSubmit]);

  return (
    <Wrap>
      <input
        value={userMail}
        onInput={onInputMail}
        type="email"
        id="userMail"
        placeholder="Enter your email.."
        name="inputMail"
        onFocus={() => {
          setIsSubmit(false);
        }}
        onBlur={onBlurInputMail}
        required
      />
      {/* eslint-disable-next-line no-nested-ternary */}
      {!onBlurMail ? (
        <span>*</span>
      ) : validMail ? (
        iconCorrect
      ) : (
        <div>
          {iconError}
          <span>email должен содержать хотя бы один символ в названии, символ @ и точку</span>
        </div>
      )}
    </Wrap>
  );
};

export default InputEmailComponent;
