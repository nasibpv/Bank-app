import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{

  transactionData:any

constructor(private ds:DataService){
  this.ds.getTransaction (JSON.parse(localStorage.getItem("currentAcno")||""))
  .subscribe((result:any)=>{
    this.transactionData=result.transaction
  })

// this.transactionData= this.ds.getTransaction(this.ds.currentAcno)
// console.log(this.transactionData);

}
ngOnInit():void{

}
}