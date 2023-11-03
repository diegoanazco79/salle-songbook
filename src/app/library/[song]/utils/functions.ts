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
