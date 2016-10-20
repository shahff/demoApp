import { Component }        from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import feathersBaseAPIService from './../shared/feathers-base-api.service';


@Component({
    templateUrl: 'register.component.html'
})
export class RegisterComponent {

    newlogin:any = {};
    
    constructor(public feathersService : feathersBaseAPIService,public router: Router) { }

    register(){
      var account = {email:this.newlogin.email, password:this.newlogin.password};
      this.feathersService.register(account).subscribe(
        res =>{console.log(res);this.router.navigate(['/pages/login'])},
        err => {console.log(err)}
      );
    }

}
