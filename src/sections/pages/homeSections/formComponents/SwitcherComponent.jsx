import React from 'react';

const SwitcherComponent = ({ userCase, setUserCase, setIsSubmit }) => {
  const handleChange = (e) => {
    e.stopPropagation();
    setIsSubmit(false);
    setUserCase(e.target.id);
  };

  return (
    <div onChange={handleChange}>
      <input type="radio" id="male" name="gender" value={userCase} defaultChecked />
      <label htmlFor="male">Male</label>
      <input type="radio" id="female" name="gender" value={userCase} />
      <label htmlFor="female">Female</label>
      <input type="radio" id="other" name="gender" value={userCase} />
      <label htmlFor="other">Other</label>
    </div>
  );
};

export default SwitcherComponent;
