import React, { useState } from 'react';
import styled from 'styled-components';

import CardRequest from './CardRequest';
import InputNameComponent from './InputNameComponent';
import InputEmailComponent from './InputEmailComponent';
import InputPhoneComponent from './InputPhoneComponent';
import InputDateComponent from './InputDateComponent';
import SelectedComponent from './SelectedComponent';
import CheckboxComponent from './CheckboxComponent';
// import SelectMultipleComponent from './SelectMultipleComponent';
import SwitcherComponent from './SwitcherComponent';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 3rem 2rem;
  }
`;

const WrapCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapFormChild = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const SectionForms = () => {
  const [userId, setUserId] = useState(1);

  const [userName, setUserName] = useState('');
  const [userCase, setUserCase] = useState('male');
  const [userMail, setUserMail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userSity, setUserSity] = useState('Moskow');
  const [userBday, setUserBday] = useState('');
  const [userChecked, setUserChecked] = useState(true);
  // const [userChoice, setUserChoice] = useState(['kukumber']);

  const [isValidName, setIsValidName] = useState();

  const [requests, setRequests] = useState([]);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (isValidName) {
      setRequests([
        ...requests,
        {
          userId,
          userName: `${userName[0].toUpperCase()}${userName.split('').slice(1).join('').toLowerCase()}`,
          userCase,
          userMail,
          userPhone: `+${userPhone.split('')[0]} (${userPhone.split('').slice(1, 4).join('')}) ${userPhone
            .split('')
            .slice(4, -5)
            .join('')}-${userPhone.split('').slice(7).join('')}`,
          userBday,
          userSity,
          // userChoice,
          userChecked,
        },
      ]);

      setUserId(userId + 1);
      setUserName('');
      setUserMail('');
      setUserPhone('');
      setUserBday('');
      setUserSity('Moskow');
      setUserChecked(true);
      // setUserChoice([]);
    }
  };

  return (
    <Wrap>
      <form>
        <InputNameComponent
          userName={userName}
          setUserName={setUserName}
          validName={isValidName}
          setValidName={setIsValidName}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
        {/* eslint-disable-next-line max-len */}
        <SwitcherComponent userCase={userCase} setUserCase={setUserCase} setIsSubmit={setIsSubmit} />
        <InputEmailComponent
          userMail={userMail}
          setUserMail={setUserMail}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
        <InputPhoneComponent
          userPhone={userPhone}
          setUserPhone={setUserPhone}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
        <InputDateComponent
          userBday={userBday}
          setUserBday={setUserBday}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
        <SelectedComponent
          userSity={userSity}
          setUserSity={setUserSity}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
        <CheckboxComponent
          userChecked={userChecked}
          setUserChecked={setUserChecked}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
        {/* <SelectMultipleComponent
          userChoice={userChoice}
          setUserChoice={setUserChoice}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        /> */}
        <WrapFormChild>
          <p>* - звёздочкой помечены поля обязательные к заполнению</p>
          <div>
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          </div>
        </WrapFormChild>
      </form>
      <WrapCards>
        {requests.map((item) => (
          <CardRequest requestData={item} key={item.userId} />
        ))}
      </WrapCards>
    </Wrap>
  );
};

export default SectionForms;
