import React from 'react';
import { Text } from './styles'

type Input = {
  userKey: string;
  setUserKey: (value: string) => void;
}

function Input({userKey, setUserKey}: Input) {
  return (
    <Text type="text" placeholder="API-Key" name="keyLogin" value={userKey} onChange={(e) => setUserKey(e.target.value)} />
  );
}

export default Input;
