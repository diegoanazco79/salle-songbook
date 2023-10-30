'use client';

import React from 'react';
import Link from 'next/link';

import { songsList } from './utils/constants';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const SongPage = ({ params }: { params: { song: string } }) => {
  const currentSong = songsList.find(song => song.url === params.song);
  const isChorus = (line: string) => line === line.toUpperCase();

  return (
    <main className='max-w-screen-sm mx-auto'>
      <Link
        className='flex align-middle items-center my-4 text-sm  hover:text-lightPurple-500'
        href='/library'
      >
        <AiOutlineArrowLeft className='mr-2' /> Volver a la lista de canciones
      </Link>

      <h1 className='font-bold text-2xl text-center mt-8'>{currentSong?.title}</h1>
      <div className='mt-2 md:mt-4'>
        {currentSong?.paragraphs.map((paragraph, idx) => (
          <p key={idx} className='text-center py-2'>
            {paragraph.map((line, idx) => (
              <span className={`text-center text-xs md:text-base ${isChorus(line) ? 'font-semibold' : ''}`} key={idx}>
                {line}
                <br />
              </span>
            ) )}
          </p>
        ))}
      </div>
    </main>
  );
};

export default SongPage;
