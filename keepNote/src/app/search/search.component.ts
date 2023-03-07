import { Component } from '@angular/core';
import { NoteServicesService } from '../services/note-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  

  searchName="";
 
  constructor(private myService:NoteServicesService){

  }
  searchNote(changedSearch:string){
    // this.myService.temp=changedSearch;
    this.myService.onChange(changedSearch)
  }
 
}
