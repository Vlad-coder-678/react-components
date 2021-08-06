import React, { useState } from 'react';
import styled from 'styled-components';

import CardRequest from './CardRequest';
import InputNameComponent from './InputNameComponent';
import InputEmailComponent from './InputEmailComponent';
import InputPhoneComponent from './InputPhoneComponent';

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
  const [userMail, setUserMail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const [userMessage, setUserMessage] = useState('');
  const [userSity, setUserSity] = useState('Moskow');
  const [userBday, setUserBday] = useState('');
  const [userChoice, setUserChoice] = useState([]);
  const [userChecked, setUserChecked] = useState(true);
  const [userNumber, setUserNumber] = useState(0);

  const [requests, setRequests] = useState([]);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setRequests([
      ...requests,
      {
        userId,
        userName: `${userName[0].toUpperCase()}${userName.split('').slice(1).join('').toLowerCase()}`,
        userMail,
        userPhone: `+${userPhone.split('')[0]} (${userPhone.split('').slice(1, 4).join('')}) ${userPhone
          .split('')
          .slice(4, -5)
          .join('')}-${userPhone.split('').slice(7).join('')}`,
        userBday,
        userSity,
        userChoice,
        userChecked,
        userNumber,
        userMessage,
      },
    ]);

    setUserId(userId + 1);
    setUserName('');
    setUserMail('');
    setUserPhone('');
    setUserBday('');
    setUserSity('Moskow');
    setUserChoice([]);
    setUserChecked(true);
    setUserNumber(0);
    setUserMessage('');
  };

  return (
    <Wrap>
      <form>
        <InputNameComponent
          userName={userName}
          setUserName={setUserName}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
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
        <WrapFormChild>
          <label htmlFor="userBday">
            <span>Your Birthday</span>
          </label>
          <input
            value={userBday}
            onInput={(e) => setUserBday(e.target.value)}
            type="phone"
            id="userBday"
            placeholder="Enter your date birthday.."
            name="inputBday"
          />
        </WrapFormChild>
        <label htmlFor="userSity">
          <span>Sity</span>
        </label>
        <select
          id="userSity"
          value={userSity}
          onChange={(e) => {
            setUserSity(e.target.value);
          }}
        >
          <option value="moskow">Moskow</option>
          <option value="kiyv">Kiyv</option>
          <option value="minsk">Minsk</option>
          <option value="new-york">New-York</option>
        </select>
        <label htmlFor="userChoice">
          <span>Choice</span>
        </label>
        <select
          id="userChoice"
          multiple
          value={userChoice}
          onChange={(e) => {
            setUserChoice(e.target.value);
          }}
        >
          <option value="kukumber">Kukumber</option>
          <option value="lumumber">Lumumber</option>
          <option value="dumper">Dumper</option>
          <option value="gumper">Gumper</option>
        </select>
        <label htmlFor="userChecked">Нажимая submit, вы даёте согласие на обработку личных данных</label>
        <input
          type="checkbox"
          checked={userChecked}
          onChange={() => {
            setUserChecked(!userChecked);
          }}
          id="userChecked"
          name="userChecked"
        />
        <label htmlFor="userNumber">Your number</label>
        <input
          name="userNumber"
          type="number"
          value={userNumber}
          onChange={(e) => {
            setUserNumber(e.target.value);
          }}
        />
        <label htmlFor="userMessage">
          <span>Message</span>
        </label>
        <textarea
          value={userMessage}
          onInput={(e) => setUserMessage(e.target.value)}
          type="text"
          id="userMessage"
          placeholder="Enter your message.."
          name="inputMessage"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
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
