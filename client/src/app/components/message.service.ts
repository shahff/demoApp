import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import feathersBaseAPIService from './../shared/feathers-base-api.service';

@Injectable()
export class MessageService {

  constructor(public featherApiService: feathersBaseAPIService) {
    
    featherApiService.init("messages");
    featherApiService._app;
  }
  
  findMessages(){
    return this.featherApiService.find();  
  }
  
  createMessage(message){
     return this.featherApiService.create(message);  
  }
  
  removeMessage(id){
     return this.featherApiService.remove(id);  
  }

}



