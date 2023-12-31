import React from 'react';
import Link from 'next/link';

import { Divider } from '@nextui-org/react';

interface Props {
  wordKey: string;
  songsList: Array<{ title: string; url: string }>;
}

const GroupSong = ({ wordKey, songsList }: Props) => {
  return (
    <div className='py-5'>
      <h6 className='font-bold text-xl'> {wordKey}</h6>
      <Divider className='mt-1 mb-4 h-[1px] bg-black' />
      <div className='flex flex-wrap gap-x-5 gap-y-3'>
        {songsList.map((song) => (
          <Link
            key={song.url}
            className='border p-2 rounded-xl transition ease-in-out duration-300 hover:bg-lightPurple-100 hover:border-lightPurple-400 cursor-pointer'
            href={`/library/${song.url}`}
          >
            {song.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GroupSong;
