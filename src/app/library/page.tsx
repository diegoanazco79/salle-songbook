import React from 'react';

import GroupSong from './components/GroupSong';

import { songList } from './utils/constants';

const LibraryPage = () => {
  const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

  return (
    <main className='max-w-screen-lg mx-auto'>
      <h1 className='text-2xl font-bold my-5'> Librería de Canciones</h1>
      {alphabet.map((letter) => {
        const songs = songList.filter((song) => song.title[0] === letter);
        if (!songs.length) return null;
        return (
          <GroupSong
            key={letter}
            wordKey={letter}
            songsList={songs}
          />
        );
      })}
    </main>
  );
};

export default LibraryPage;
