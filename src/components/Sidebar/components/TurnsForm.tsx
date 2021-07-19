import React, { ReactElement, useState } from 'react';
import { useNumberStateInput } from '../../../hooks/useNumberStateInput';
import { OnClick } from '../../../types';
import { NumberInput } from './NumberInput';
interface props {
  startGame: (numTurns: number) => void;
}

export function TurnsForm({ startGame }: props): ReactElement {
  const [numTurns, setNumTurns] = useNumberStateInput(0, 500);
  const [incomplete, setIncomplete] = useState(false);

  const submit: OnClick = (e) => {
    e.preventDefault();
    if (numTurns > 0) {
      startGame(numTurns);
      setNumTurns(0);
      setIncomplete(false);
    } else {
      setIncomplete(true);
    }
  };
  return (
    <form action='submit'>
      <NumberInput
        name='days'
        value={numTurns}
        incomplete={incomplete}
        onChange={(e) => setNumTurns(e.target.value)}
      />
      <input type='submit' value='Start' onClick={submit} />
    </form>
  );
}
