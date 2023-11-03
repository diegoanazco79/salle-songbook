import { isEmpty, some } from 'lodash';

import { Props as Paragraphs } from '../components/Lyrics';

/**
 * Check if a song has chords
 * @param data - The song data
 */
export const songHasChords = (data: Paragraphs): boolean => {
  return some(data.paragraphs, paragraphArray => {
    return some(paragraphArray, paragraph => !isEmpty(paragraph.chords));
  });
};

/**
 * Check if a line is a chorus
 * @param line
 * @returns
 */
export const isChorus = (line: string) => line === line.toUpperCase();

/**
 * Check if a line is an entire line chorus
 * @param line
 * @returns
 */
export const isEntireLineChorus = (line: string) => {
  return line.split('').every((character) => isChorus(character));
};
