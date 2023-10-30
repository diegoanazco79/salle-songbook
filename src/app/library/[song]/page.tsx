import React from 'react';

const SongPage = ({ params }: { params: { song: string } }) => {
  return (
    <div>{params.song}</div>
  );
};

export default SongPage;
