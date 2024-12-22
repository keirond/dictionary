import { PartOfSpeech } from '@common/enums';

export interface WordEntry {
    id: number;
    word: string;
    partOfSpeech?: PartOfSpeech;
    definition?: string;
    synonyms?: string[];
    antonyms?: string[];
    examples?: string[];
    voices?: string[];
}
