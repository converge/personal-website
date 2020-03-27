import React from 'react';
import { shallow } from 'enzyme';
import AsideContent from '../components/AsideContent';

describe('General', () => {
  it('Should render one EmailForm component', () => {
    const montedApp = shallow(<AsideContent />);
    const posts = montedApp.find('EmailForm');
    expect(posts.length).toBe(1);
  });
});
