import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

// eslint-disable-next-line object-curly-newline
const InputPhoneComponent = ({ userPhone, setUserPhone, isSubmit, setIsSubmit }) => {
  const [validPhone, setValidPhone] = useState();
  const [onBlurPhone, setOnBlurPhone] = useState();

  const onBlurInputPhone = (e) => {
    setOnBlurPhone(true);
    setValidPhone(e.target.value.length > 10 && e.target.value.length < 12 && e.target.value.match(/^[0-9\b]+$/));
  };

  const onInputPhone = (e) => {
    setUserPhone(e.target.value);
    setValidPhone(e.target.value.length > 10 && e.target.value.length < 12 && e.target.value.match(/^[0-9\b]+$/));
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
      <label htmlFor="userPhone">
        <span>Telephone</span>
      </label>
      {/* eslint-disable-next-line no-nested-ternary */}
      {!onBlurPhone ? null : validPhone ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="#0f0" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
      ) : (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path
              fill="#f00"
              d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
            />
          </svg>
          <span>телефон должен содержать только цифры и введён в следующем формате: </span>
        </div>
      )}
    </Wrap>
  );
};

export default InputPhoneComponent;
