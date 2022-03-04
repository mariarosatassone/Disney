import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../classes/character';
import { CharacterData } from '../interfaces/character-data';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  character: Character [] = [];

  constructor(private http: HttpClient) { }



  getAllCharacter() {
  return this.http.get<CharacterData>(environment.serverDisney)
  }


  getTvShowById(_id:number) {
    return this.http.get<Character>(environment.serverDisney + _id)
   

  }

}
