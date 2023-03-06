import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from '../keep-Note-data/Note';
@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  temp:string="";
  onChanges(titleVal:string){
   
    alert(titleVal)
  }

   constructor( private http:HttpClient) { }
   getNotes():Observable<INote[]>{
    if(this.temp===""){
     return this.http.get<INote[]>('http://localhost:3000/notes')
    } 
    return this.http.get<INote[]>('http://localhost:3000/notes')
   }

   AddNotes(NoteData:INote){
    return this.http.post<INote>('http://localhost:3000/notes', NoteData)
   }
}
