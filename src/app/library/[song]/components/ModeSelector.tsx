import React from 'react';
import { Button, ButtonGroup } from '@nextui-org/react';

import { CHORDS_MODE, LYRICS_MODE } from '../utils/constants';

import { CgNotes } from 'react-icons/cg';
import { GiGuitarHead } from 'react-icons/gi';

interface Props {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>
}

const ModeSelector = ({ mode, setMode }:Props) => {
  return (
    <ButtonGroup className={`w-full mt-3 ${mode === LYRICS_MODE ? 'mb-2' : 'mb-8'}`}>
      <Button
        variant={mode === LYRICS_MODE ? 'flat' : 'light'}
        color='primary'
        className='p-0 border border-lightPurple-400'
        onClick={() => setMode(LYRICS_MODE)}
      >
        <CgNotes className='w-[20px] h-[20px]' />
      </Button>
      <Button
        variant={mode === CHORDS_MODE ? 'flat' : 'light'}
        color='primary'
        className='p-0 border border-lightPurple-400 border-l-0'
        onClick={() => setMode(CHORDS_MODE)}
      >
        <GiGuitarHead className='w-[20px] h-[20px]' />
      </Button>
    </ButtonGroup>
  );
};

export default ModeSelector;
