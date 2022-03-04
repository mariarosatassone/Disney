import { Character } from "../classes/character";

export interface CharacterData {
    data: Array<Character>;
    count : number;
    totalPages: number;
    nextPage: string;

}
