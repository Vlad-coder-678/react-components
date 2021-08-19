// eslint-disable-next-line import/no-extraneous-dependencies
import Enzyme, { shallow, render, mount } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import EnzymeAdapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/no-extraneous-dependencies
import toJson from 'enzyme-to-json';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

// Fail tests on any warning
// eslint-disable-next-line no-console
console.error = (message) => {
  throw new Error(message);
};
