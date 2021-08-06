import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

// eslint-disable-next-line object-curly-newline
const InputNameComponent = ({ userName, setUserName, isSubmit, setIsSubmit }) => {
  const [validName, setValidName] = useState();
  const [onBlurName, setOnBlurName] = useState();

  const onBlurInputName = (e) => {
    setOnBlurName(true);
    setValidName(e.target.value.length > 3);
  };

  const onInputName = (e) => {
    setUserName(e.target.value);
    setValidName(e.target.value.length > 3);
  };

  useEffect(() => {
    if (isSubmit) {
      setOnBlurName();
    }
  }, [isSubmit]);
  return (
    <Wrap>
      <input
        value={userName}
        onInput={onInputName}
        type="text"
        id="userName"
        placeholder="Enter name.."
        name="inputName"
        onFocus={() => {
          setIsSubmit(false);
        }}
        onBlur={onBlurInputName}
        required
      />
      <label htmlFor="userName">
        <span>Name</span>
      </label>
      {/* eslint-disable-next-line no-nested-ternary */}
      {!onBlurName ? null : validName ? (
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
          <span>имя должно содержать более трёх символов</span>
        </div>
      )}
    </Wrap>
  );
};

export default InputNameComponent;
