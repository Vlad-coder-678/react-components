import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

// eslint-disable-next-line object-curly-newline
const SelectMultipleComponent = ({ isSubmit, setIsSubmit }) => {
  // const [userSelect, setUserSelect] = useState();
  const [onBlurSelected, setOnBlurSelected] = useState(false);
  // const [isValidSelected, setIsValidSelected] = useState(false);

  // const onBlurHandleSelected = (e) => {
  //   setOnBlurSelected(true);
  //   // console.log(e.target);
  //   // console.log(userSelect);
  //   // setUserChoice([]);
  //   setIsValidSelected(e.target.value !== null);
  // };

  useEffect(() => {
    if (isSubmit) {
      setOnBlurSelected();
    }
  }, [isSubmit]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Wrap>
      <select
        id="userChoice"
        multiple
        // value={userChoice}
        // value={['kukumber']}
        onFocus={() => {
          setIsSubmit(false);
        }}
        // onBlur={onBlurHandleSelected}
        // onChange={(e) => {
        // console.log(e.target.option);
        // setUserSelect(e.target.value);
        // }}
      >
        <option id="kukumber" value="kukumber" selected>
          Kukumber
        </option>
        <option id="lumumber" value="lumumber" selected>
          Lumumber
        </option>
        <option id="dumper" value="dumper">
          Dumper
        </option>
        <option id="gumper" value="gumper">
          Gumper
        </option>
      </select>
      <label htmlFor="userChoice">
        <span>Choice</span>
      </label>
      {/* eslint-disable-next-line no-nested-ternary */}
      {/* {!onBlurSelected ? null : isValidSelected ? (
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
      )} */}
    </Wrap>
  );
};

export default SelectMultipleComponent;
