'use client';
import React, { useState } from 'react';
import { debounce } from 'lodash';

import GroupSong from './components/GroupSong';
import { Input } from '@nextui-org/react';

import { songsNamesList as initialSongsList } from './utils/constants';
import { BsSearch } from 'react-icons/bs';

const LibraryPage = () => {
  const [songsList, setSongsList] = useState(initialSongsList);
  const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  const songsListCopy = initialSongsList;

  /**
   * Handle the search of a song
   * @param e - Event of the input
   */
  const onSearchSong = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) {
      setSongsList(songsListCopy);
      return;
    }
    const filteredSongs = songsListCopy.filter(song => song.title.toLowerCase().includes(value.toLowerCase()));
    setSongsList(filteredSongs);
  }, 200);

  return (
    <main className='max-w-screen-lg mx-auto'>
      <div className='flex flex-col md:flex-row justify-between md:items-end my-5'>
        <h1 className='text-2xl font-bold items-end'> Librería de Canciones</h1>
        <div className='flex mt-3 md:items-end md:mt-0'>
          <Input
            className='border-lightPurple-200'
            variant='bordered'
            placeholder='Buscar una canción'
            onChange={onSearchSong}
            startContent={<BsSearch />}
            type='text'
          />
        </div>
      </div>
      {songsList.length === 0 && (
        <p className='text-center text-base font-semibold mt-10'>
          No se encontraron canciones con ese nombre
        </p>
      )}
      {songsList.length > 0 && (
        <>
          {alphabet.map((letter) => {
            const songs = songsList.filter((song) => song.title[0] === letter);
            if (!songs.length) return null;
            return (
              <GroupSong
                key={letter}
                wordKey={letter}
                songsList={songs}
              />
            );
          })}
        </>
      )}
    </main>
  );
};

export default LibraryPage;
