import { Component, EventEmitter, Output } from '@angular/core';
import { NoteServicesService } from '../services/note-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()

  // eventObj=new EventEmitter();
  searchName="";
  // searchNote(){
  //   this.eventObj.emit(this.searchName);
  //   this.searchName="";

  // }
  
  constructor(private myService:NoteServicesService){

  }
  searchNote(changedSearch:string){
    this.myService.onChanges(changedSearch)
  }

  
}
