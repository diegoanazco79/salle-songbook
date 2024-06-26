'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Lyrics from './components/Lyrics';
import ModeSelector from './components/ModeSelector';
// import { Button, Tooltip } from '@nextui-org/react';

import { songList, LYRICS_MODE } from './utils/constants';

import { AiOutlineArrowLeft } from 'react-icons/ai';
// import { MdOutlineReportGmailerrorred } from 'react-icons/md';

const SongPage = ({ params }: { params: { song: string } }) => {
  const songMap = new Map(songList.map(song => [song.url, song]));
  const currentSong = songMap.get(params.song);

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
      <Lyrics mode={mode} paragraphs={currentSong?.paragraphs} />

      {/* <div className='mt-14 flex justify-center'>
        <Tooltip content='¿Encontraste un error? ¡Avísanos!'>
          <Link href={`/report/${currentSong?.url}`}>
            <Button color='primary' variant='flat' isIconOnly>
              <MdOutlineReportGmailerrorred className='h-[20px] w-[20px]' />
            </Button>
          </Link>
        </Tooltip>
      </div> */}
    </main>
  );
};

export default SongPage;
