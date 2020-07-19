import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Character} from '../classes/character';
import {Response} from "../classes/response";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) {
  }

  private characterUrl = 'http://restapi.localhost/api/';

  getCharacters(): Observable<Character[]> {
    // @ts-ignore
    return this.http.get<Response>(this.characterUrl + 'characters')
      .pipe(map(result => result['data']));
  }

  getCharacter(id): Observable<Character> {
    return this.http.get<Character>(this.characterUrl + id);
  }

}
