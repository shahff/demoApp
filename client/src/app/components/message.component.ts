import { Component, OnInit } from '@angular/core';
import {MessageService }     from './message.service';
import {Observable} from 'rxjs';


@Component({
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

    newMessage:any = {};
    messages$:Observable<any[]>;


  constructor(public messageService: MessageService) { 

  }

    ngOnInit() {
      this.findMsg();
    }

   findMsg(){
      this.messageService.findMessages().subscribe(
        res=>{this.messages$ = res;}
      );
      
    }

    createMsg(){
      let message = this.newMessage;
      
      this.messageService.createMessage(message).subscribe(
        res => {this.findMsg();},
        err => {console.log("err = "+err)}
      );
    }

    removeMsg(id){
      
      this.messageService.removeMessage(id).subscribe(
        res => {this.findMsg();},
        err => {console.log("err = "+err)}
      );
    }


}
