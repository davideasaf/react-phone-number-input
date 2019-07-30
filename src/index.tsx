import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

import './styles.css';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const rawPhoneNumber = (formattedPhoneNum: string) => {
    const raw = formattedPhoneNum.replace(/[()-]/g, '').replace(/ +/g, '');
    return raw;
  };

  const formatPhoneNumber = (phoneNum: string) => {
    var cleaned = ('' + phoneNum).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{1,3})(\d{1,3})?(\d{1,4})?$/);
    if (match) {
      if (match[3]) {
        return `(${match[1]}) ${match[2]} - ${match[3]}`;
      } else if (match[2]) {
        return `(${match[1]}) ${match[2]}`;
      } else if (match[1]) {
        return `(${match[1]})`;
      }
    }
    return '';
  };

  const updatePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawNum = rawPhoneNumber(e.target.value);
    if (rawNum.length > 10) {
      return;
    }
    return setPhoneNumber(rawNum);
  };

  return (
    <div className="App">
      Input:{' '}
      <input
        type="text"
        value={formatPhoneNumber(phoneNumber)}
        onChange={e => updatePhoneNumber(e)}
      />
      <p>Storing: {phoneNumber}</p>
    </div>
  );
};

const rootElement = document.getElementById('root');
render(<App />, rootElement);
