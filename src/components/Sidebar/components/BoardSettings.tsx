import React, { ReactElement, useState } from 'react';
import { useNumberStateInput } from '../../../hooks/useNumberStateInput';
import { limitInputValue } from '../../../lib';
import { OnChange, OnClick } from '../../../types';
import { Linked } from './Linked';
import { NumberInput } from './NumberInput';
interface Props {
  resetBoard: (percent: number, width: number, height: number) => void;
}

export default function BoardSettings({ resetBoard }: Props): ReactElement {
  const [size, setSize] = useState({
    width: 30,
    height: 30,
  });
  const [linked, setLinked] = useState(false);
  const [percent, setPercent] = useNumberStateInput(33, 100);
  const [incomplete, setIncomplete] = useState({
    percent: false,
    width: false,
    height: false,
  });

  const updateSize: OnChange = ({ target }) => {
    const value = limitInputValue(parseInt(target.value, 10));
    if (linked) {
      setSize({
        width: value,
        height: value,
      });
      return;
    }
    setSize((prevState) => ({
      ...prevState,
      [target.name]: value,
    }));
  };

  const submit: OnClick = (e) => {
    e.preventDefault();
    if (size.width === 0 || size.height === 0 || percent === 0) {
      setIncomplete({
        width: size.width === 0,
        height: size.height === 0,
        percent: percent === 0,
      });
      return;
    }

    resetBoard(percent, size.width, size.height);
    setIncomplete({ width: false, height: false, percent: false });
  };

  return (
    <form action='submit' className='reset'>
      <div className='size-input-container'>
        <NumberInput
          name='width'
          value={size.width}
          incomplete={incomplete.width}
          onChange={updateSize}
        />
        <Linked linked={linked} setLinked={setLinked} />
        <NumberInput
          name='height'
          value={size.height}
          incomplete={incomplete.height}
          onChange={updateSize}
        />
      </div>
      <div className='form-row'>
        <NumberInput
          name='percent'
          value={percent}
          incomplete={incomplete.percent}
          onChange={(e) => setPercent(e.target.value)}
        />
        <input type='submit' value='New Board' onClick={submit} />
      </div>
    </form>
  );
}
