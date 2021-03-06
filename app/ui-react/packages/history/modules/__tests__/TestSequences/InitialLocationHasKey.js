import expect from 'expect';

import execSteps from './execSteps';

export default function(history, done) {
  const steps = [
    location => {
      expect(location.key).toBeTruthy();
    }
  ];

  execSteps(steps, history, done);
}
