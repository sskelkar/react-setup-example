import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from '../../src/js/app';

describe('<App />', () => {

  it('should render the hello world message', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper.find('h2').text()).to.equal('Helloooo World!!');
  });

});
