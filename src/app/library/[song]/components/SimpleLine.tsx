import React from 'react';

interface Props {
  currentSong: {
    title: string;
    url: string;
    paragraphs: string[][];
} | undefined
}

const SimpleLine = ({ currentSong }: Props) => {
  const isChorus = (line: string) => line === line.toUpperCase();

  return (
    <div className='mt-2 md:mt-4'>
      {currentSong?.paragraphs.map((paragraph, idx) => (
        <p key={idx} className='text-center py-2'>
          {paragraph.map((line, idx) => {
            return (
              <span
                className={`text-center text-xs md:text-base ${
                    isChorus(line) ? 'font-semibold' : ''
                  }`}
                key={idx}
              >
                {line}
                <br />
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
};

export default SimpleLine;
