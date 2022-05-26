import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-join-bussiness',
  templateUrl: './add-or-join-bussiness.component.html',
  styleUrls: ['./add-or-join-bussiness.component.scss']
})
export class AddOrJoinBussinessComponent implements OnInit {
 showMe:boolean=false
 i:any='joinBussiness'
  constructor() { }

  ngOnInit(): void {
  }
toggleTag(){
  this.showMe=!this.showMe
}
select(value:any){
  (value == 'je')?this.i='joinBussiness':this.i='newBussiness'
}
}
