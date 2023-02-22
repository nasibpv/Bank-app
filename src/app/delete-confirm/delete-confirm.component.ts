import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {
  @Input() item:String|undefined
  // @input:- Decarector -  String:-type 

    //  event creation  
    // data resive in chid
  @Output()  onCancel=new EventEmitter()
  constructor(){}

  ngOnInit(): void {}

  oncancel(){
// start event
this.onCancel.emit() 
  }

}
