import React, { useState, useEffect } from 'react';
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
const InputPhoneComponent = ({ userPhone, setUserPhone, isSubmit, setIsSubmit }) => {
  const [validPhone, setValidPhone] = useState();
  const [onBlurPhone, setOnBlurPhone] = useState();

  const onBlurInputPhone = (e) => {
    setOnBlurPhone(true);
    setValidPhone(
      e.target.value.length > 10 && e.target.value.length < 12 && e.target.value.match(/^[0-9\b]+$/)
    );
  };

  const onInputPhone = (e) => {
    setUserPhone(e.target.value);
    setValidPhone(
      e.target.value.length > 10 && e.target.value.length < 12 && e.target.value.match(/^[0-9\b]+$/)
    );
  };

  useEffect(() => {
    if (isSubmit) {
      setOnBlurPhone();
    }
  }, [isSubmit]);

  return (
    <Wrap>
      <input
        value={userPhone}
        onInput={onInputPhone}
        type="phone"
        id="userPhone"
        placeholder="Enter your phone number.."
        name="inputPhone"
        onFocus={() => {
          setIsSubmit(false);
        }}
        onBlur={onBlurInputPhone}
        required
      />
      {/* eslint-disable-next-line no-nested-ternary */}
      {!onBlurPhone ? (
        <span>*</span>
      ) : validPhone ? (
        iconCorrect
      ) : (
        <div>
          {iconError}
          <span>телефон должен содержать не менее десяти цифр</span>
        </div>
      )}
    </Wrap>
  );
};

export default InputPhoneComponent;
