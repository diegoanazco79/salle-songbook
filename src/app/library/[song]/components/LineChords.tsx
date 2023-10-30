import React from 'react';

interface Paragraph {
  chords: {
    position: number;
    chord: string;
  }[];
  line: string;
}

interface Props {
  paragraphs?: Paragraph[][];
}

const LineChords = ({ paragraphs }: Props) => {
  const isChorus = (line: string) => line === line.toUpperCase();

  return (
    <div className='text-center'>
      {paragraphs?.map((setOfParagraphs, setIndex) => (
        <div className='pt-4' key={setIndex}>
          {setOfParagraphs.map((paragraph, paragraphIndex) => (
            <div className={paragraph.chords.length > 0 ? 'h-[50px]' : ''} key={paragraphIndex}>
              {paragraph.line.split('').map((character, characterIndex) => {
                const chord = paragraph.chords.find(chord => characterIndex === chord.position);
                return (
                  <span key={characterIndex} className={`text-xs md:text-base ${chord ? 'relative inline-block' : ''} ${isChorus(paragraph.line.split('')[0]) && isChorus(paragraph.line.split('')[1]) && isChorus(paragraph.line.split('')[2]) ? 'font-semibold' : ''}`}>
                    {chord && <span className='absolute top-[-20px] font-semibold left-0'>{chord.chord}</span>}
                    {character}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LineChords;
