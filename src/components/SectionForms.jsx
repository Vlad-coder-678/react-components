import React from 'react';
import styled from 'styled-components';

import CardRequest from './CardRequest';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 3rem 2rem;
    border: 1px solid red;
  }
`;

const WrapCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SectionForms = () => {
  const [userId, setUserId] = React.useState(2);
  const [userName, setUserName] = React.useState('');
  const [userSurname, setUserSurname] = React.useState('');
  const [userMail, setUserMail] = React.useState('');
  const [userPhone, setUserPhone] = React.useState('');
  const [userBday, setUserBday] = React.useState('');
  const [requests, setRequests] = React.useState([
    {
      userId: 1,
      userName: 'Jake',
      userSurname: 'Johnson',
      userMail: 'mail@mail.ru',
      userPhone: '+79876543210',
      userBday: '12.09.12',
    },
  ]);

  if (!Array.isArray(requests) || requests.length <= 0) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests([
      ...requests,
      {
        userId,
        userName,
        userSurname,
        userMail,
        userPhone,
        userBday,
      },
    ]);
    setUserId(userId + 1);
    setUserName('');
    setUserSurname('');
    setUserMail('');
    setUserPhone('');
    setUserBday('');
  };

  return (
    <Wrap>
      <form>
        <label htmlFor="userName">
          <span>Name</span>
        </label>
        <input
          value={userName}
          onInput={(e) => setUserName(e.target.value)}
          type="text"
          id="userName"
          placeholder="Enter name.."
          name="inputName"
        />
        <label htmlFor="userSurname">
          <span>Surname</span>
        </label>
        <input
          value={userSurname}
          onInput={(e) => setUserSurname(e.target.value)}
          type="text"
          id="userSurname"
          placeholder="Enter your surname.."
          name="inputSurname"
        />
        <label htmlFor="userMail">
          <span>Mail</span>
        </label>
        <input
          value={userMail}
          onInput={(e) => setUserMail(e.target.value)}
          type="email"
          id="userMail"
          placeholder="Enter your mail.."
          name="inputMail"
        />
        <label htmlFor="userPhone">
          <span>Telephone</span>
        </label>
        <input
          value={userPhone}
          onInput={(e) => setUserPhone(e.target.value)}
          type="phone"
          id="userPhone"
          placeholder="Enter your phone number.."
          name="inputPhone"
        />
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
