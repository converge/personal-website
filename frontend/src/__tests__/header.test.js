import React from 'react';
import { shallow } from 'enzyme';
import HeaderPost from '../components/Header/headerPost';
import Header from '../components/Header/index';

describe('General', () => {
  it('should render HeaderPost', () => {
    shallow(<HeaderPost />);
  });

  it('Should render an img element', () => {
    const imgElement = shallow(<Header />);
    const img = imgElement.find('img');
    expect(img.length).toBe(1);
  })
});
