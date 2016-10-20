import { Component }        from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import feathersBaseAPIService from './../shared/feathers-base-api.service';


@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    newlogin:any = { email:'joe@aol.com', password:'joe123'};


    constructor(public feathersService : feathersBaseAPIService, public router: Router) { }


    login(){
      var account = {email:this.newlogin.email, password:this.newlogin.password};
      this.feathersService.auth(account).subscribe(
        res =>{console.log(res); this.router.navigate(['/dashboard'])},
        err => {console.log(err)}
      );
    }

    dashboard(){
      this.router.navigate(['/dashboard']);
    }

}
