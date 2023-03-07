import { Component } from '@angular/core';
import { NoteServicesService } from '../services/note-services.service';

@Component({
  selector: 'app-fetch-notes',
  templateUrl: './fetch-notes.component.html',
  styleUrls: ['./fetch-notes.component.css']
})
export class FetchNotesComponent {
  receiveDataList:any
  constructor (private myService: NoteServicesService){
  }
  ngOnInit(){
    this.receiveDataList=this.myService.getNotes().subscribe(data=>this.receiveDataList=data)
  }
}