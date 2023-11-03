'use client';
import React from 'react';

import { isEntireLineChorus, songHasChords } from '../utils/functions';

import { CHORDS_MODE, LYRICS_MODE } from '../utils/constants';

interface Paragraph {
  chords: {
    position: number;
    chord: string;
  }[];
  line: string;
}

export interface Props {
  paragraphs?: Paragraph[][];
  mode?: string;
}
const Lyrics = ({ paragraphs, mode }: Props) => {
  const hasChords = songHasChords({ paragraphs });

  return (
    <div className='text-center'>
      {hasChords
        ? (
          <>
            {paragraphs?.map((setOfParagraphs, setIndex) => (
              <div className={setIndex !== 0 ? 'pt-4' : ''} key={setIndex}>
                {setOfParagraphs?.map((paragraph, paragraphIndex) => (
                  <div className={`${paragraph?.chords?.length > 0 && paragraphIndex === 0 ? 'mt-5' : ''} ${paragraph?.chords?.length > 0 && paragraphIndex !== setOfParagraphs?.length - 1 && mode === CHORDS_MODE ? 'h-[50px]' : ''}`} key={paragraphIndex}>
                    {paragraph?.line?.split('').map((character, characterIndex) => {
                      const chord = paragraph?.chords?.find(chord => characterIndex === chord.position);
                      return (
                        <span key={characterIndex} className={`text-xs md:text-base ${chord ? 'relative inline-block' : ''} ${isEntireLineChorus(paragraph?.line) ? 'font-semibold' : ''}`}>
                          {chord && mode === CHORDS_MODE && <span className='absolute top-[-20px] font-semibold left-0'>{chord.chord}</span>}
                          {mode === CHORDS_MODE && <span className={character === '&' ? 'text-transparent' : ''}>{character}</span>}
                          {mode === LYRICS_MODE && <span>{character === '&' ? '' : character}</span>}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </>
        )
        : (
          <p className='text-center text-base font-semibold mt-4'>
            No se encontraron acordes para esta canción
          </p>
        )}
    </div>
  );
};

export default Lyrics;
