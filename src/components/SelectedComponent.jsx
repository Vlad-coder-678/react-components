import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

// eslint-disable-next-line object-curly-newline
const SelectedComponent = ({ userSity, setUserSity, isSubmit, setIsSubmit }) => {
  const [onBlurSity, setOnBlurSity] = useState(false);
  const [isValidSity, setIsValidSity] = useState(false);

  const onBlurSelectedSity = (e) => {
    setOnBlurSity(true);
    setIsValidSity(e.target.value !== null);
  };

  useEffect(() => {
    if (isSubmit) {
      setOnBlurSity();
    }
  }, [isSubmit]);

  return (
    <Wrap>
      <select
        id="userSity"
        value={userSity}
        onFocus={() => {
          setIsSubmit(false);
        }}
        onChange={(e) => {
          setUserSity(e.target.value);
        }}
        onBlur={onBlurSelectedSity}
      >
        <option value="moskow">Moskow</option>
        <option value="kiyv">Kiyv</option>
        <option value="minsk">Minsk</option>
        <option value="new-york">New-York</option>
      </select>
      <label htmlFor="userSity">
        <span>Sity</span>
      </label>
      {/* eslint-disable-next-line no-nested-ternary */}
      {!onBlurSity ? null : isValidSity ? (
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
        </div>
      )}
    </Wrap>
  );
};

export default SelectedComponent;
