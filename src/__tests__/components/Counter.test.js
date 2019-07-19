import React from 'react';
import Counter from '../../components/counter/Counter';

describe('<Counter /> Enzyme Test', () => {
  it('is alive at application start', () => {
    const app = <Counter/>;

    expect(app).toBeTruthy();
  });
});
