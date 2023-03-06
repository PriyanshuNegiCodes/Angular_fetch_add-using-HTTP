import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()

  eventObj=new EventEmitter();
  searchName="";
  searchNote(){
    this.eventObj.emit(this.searchName);
    // this.searchName="";

  }
}
