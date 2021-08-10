/* eslint-disable max-len */
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
const InputNameComponent = ({ userName, setUserName, validName, setValidName, isSubmit, setIsSubmit }) => {
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
      {/* eslint-disable-next-line no-nested-ternary */}
      {!onBlurName ? (
        <span>*</span>
      ) : validName ? (
        iconCorrect
      ) : (
        <div>
          {iconError}
          <span>имя должно содержать более трёх символов</span>
        </div>
      )}
    </Wrap>
  );
};

export default InputNameComponent;
