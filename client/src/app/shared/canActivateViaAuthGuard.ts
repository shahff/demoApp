import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import FeathersBaseAPIService from './feathers-base-api.service';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(public feathersService : FeathersBaseAPIService) {}

  canActivate() {
     /*if(localStorage.getItem('feathers-jwt') !== null) {
        return true;
     }
     return false;
     */
    return true;
  }
}