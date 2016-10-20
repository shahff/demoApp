import { Injectable } from '@angular/core';
import feathersBaseAPIService from './../shared/feathers-base-api.service';



@Injectable()
export class UserService {

  user:string = 'none';

  constructor(public feathersService : feathersBaseAPIService) { }


  getUser(){
   
    // authenticate using your JWT that was passed in the short lived cookie
    this.feathersService.getUser().subscribe(
        res =>{
          console.log('Authenticated! ' + res);
          let resx = res as any;
          if(resx.data.github == undefined)
          {
            console.log('lc'+ resx.data.email);
            this.user =resx.data.email;
          }
          else
          {
            console.log('gt'+ resx.data.github.login);
              this.user = resx.data.github.login;
          }
          
        },
        err => {console.log('user - '+ err)}
    );
    
    /*.then(function(result){
      console.log('Authenticated!', result);
      //alert('Your JWT is: ' + app.get('token'));
        let user = 'none';
        if(result.data.github == undefined)
        {
          console.log('lc'+ result.data.email);
          user =result.data.email;
        }
        else
        {
          console.log('gt'+ result.data.github.login);
            user = result.data.github.login;
        }
        */
  }


}
