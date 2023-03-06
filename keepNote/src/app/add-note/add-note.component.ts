import { Component } from '@angular/core';
import { INote } from '../keep-Note-data/Note';
import { NoteServicesService } from '../services/note-services.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  
  NoteData: INote|any={
    id:0,
    title:"",
    content:""
  }

  constructor(private myService:NoteServicesService){

  }
  AddNote(){
    this.myService.AddNotes(this.NoteData).subscribe(data=>alert("Data Inserted"), err=>alert("Error inserting data"))
  }

}
