import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from '../keep-Note-data/Note';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  temp="";
  onChange(tempval:string){
    this.temp=tempval
    this.getNotes()
  }

  constructor( private http:HttpClient) { }

   //get the notes as shown below
   getNotes(): Observable<INote[]> {
    let temporary=this.temp
    if (this.temp == "") {
      // alert("if working")
      return this.http.get<INote[]>('http://localhost:3000/notes');
    } else{
     
      alert(temporary)
      return this.http.get<INote[]>('http://localhost:3000/notes')
    .pipe(
            map(notes => notes.filter(note => note.title.startsWith(temporary)))
     );
    }
  }



   //Add the notes as shown below
   AddNotes(NoteData:INote){
    return this.http.post<INote>('http://localhost:3000/notes', NoteData)
   }
}
