import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

// eslint-disable-next-line object-curly-newline
const InputDateComponent = ({ userBday, setUserBday, isSubmit, setIsSubmit }) => {
  const [validDate, setValidDate] = useState();
  const [onBlurDate, setOnBlurDate] = useState();

  const onBlurInputDate = (e) => {
    setOnBlurDate(true);
    setValidDate(e.target.value !== null);
  };

  useEffect(() => {
    if (isSubmit) {
      setOnBlurDate();
    }
  }, [isSubmit]);

  return (
    <Wrap>
      <input
        value={userBday}
        onInput={(e) => setUserBday(e.target.value)}
        type="date"
        id="userBday"
        placeholder="Enter your date birthday.."
        name="inputBday"
        onBlur={onBlurInputDate}
        onFocus={() => {
          setIsSubmit(false);
        }}
      />
      <label htmlFor="userBday">
        <span>Your Birthday</span>
      </label>
      {/* eslint-disable-next-line no-nested-ternary */}
      {!onBlurDate ? null : validDate ? (
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
          <span>введиту дату рождения</span>
        </div>
      )}
    </Wrap>
  );
};

export default InputDateComponent;
