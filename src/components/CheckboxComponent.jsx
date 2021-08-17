import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

// eslint-disable-next-line object-curly-newline
const CheckboxComponent = ({ userChecked, setUserChecked, setIsSubmit }) => {
  const handleOnFocusChecked = () => {
    setIsSubmit(false);
  };

  return (
    <Wrap>
      <input
        type="checkbox"
        checked={userChecked}
        onChange={() => {
          setUserChecked(!userChecked);
        }}
        id="userChecked"
        name="userChecked"
        onFocus={handleOnFocusChecked}
      />
      <label htmlFor="userChecked">Нажимая submit, вы даёте согласие на обработку личных данных</label>
    </Wrap>
  );
};

export default CheckboxComponent;
