import { Component, OnInit }            from '@angular/core';
import {UserService}                    from './../shared/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import feathersBaseAPIService from './../shared/feathers-base-api.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

    name:string = "-";

    constructor(public feathersService : feathersBaseAPIService,public router: Router) { }

    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit(): void {

        //this.name= this.userService.user;
        //console.log('lay - ' + this.name);

        this.feathersService.getUser().subscribe(
        res =>{
          console.log('Authenticated! ' + res);
          let resx = res as any;
          if(resx.data.github == undefined)
          {
            console.log('lc'+ resx.data.email);
            this.name =resx.data.email;
          }
          else
          {
            console.log('gt'+ resx.data.github.login);
              this.name = resx.data.github.login;
          }
          
        },
        err => {
                console.log('auth err - '+ err);
                this.router.navigate(['/']);
                }
    );
    }

    logout(){
        this.feathersService.logout();
        this.router.navigate(['/']);

    }
}
