import React from 'react';
import Counter from '../../counter/Counter';

describe('<Counter /> Enzyme Test', () => {
  it('is alive at application start', () => {
    const app = shallow(<Counter/>);

    expect(app.find('.counter').text().toBe('0'));
  })
});