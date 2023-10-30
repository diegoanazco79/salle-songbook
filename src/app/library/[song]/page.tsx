'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import LineChords from './components/LineChords';
import ModeSelector from './components/ModeSelector';
import SimpleLine from './components/SimpleLine';

import { songsList, songListWithChords, LYRICS_MODE, CHORDS_MODE } from './utils/constants';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const SongPage = ({ params }: { params: { song: string } }) => {
  const currentSong = songsList.find((song) => song.url === params.song);
  const currentSongWithChords = songListWithChords.find((song) => song.url === params.song);

  const [mode, setMode] = useState(LYRICS_MODE);

  return (
    <main className='max-w-screen-sm mx-auto'>
      <Link
        className='flex align-middle items-center my-4 text-sm  hover:text-lightPurple-500'
        href='/library'
      >
        <AiOutlineArrowLeft className='mr-2' /> Volver a la lista de canciones
      </Link>

      <h1 className='font-bold text-2xl text-center mt-8'>
        {currentSong?.title}
      </h1>
      <ModeSelector mode={mode} setMode={setMode} />
      {mode === LYRICS_MODE && <SimpleLine currentSong={currentSong} />}
      {mode === CHORDS_MODE && <LineChords paragraphs={currentSongWithChords?.paragraphs} />}
    </main>
  );
};

export default SongPage;
