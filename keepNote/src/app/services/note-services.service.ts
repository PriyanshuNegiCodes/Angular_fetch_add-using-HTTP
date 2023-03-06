import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from '../keep-Note-data/Note';
@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
   constructor( private http:HttpClient) { }
   getNotes():Observable<INote[]>{
    return this.http.get<INote[]>('http://localhost:3000/notes')
   }

}
