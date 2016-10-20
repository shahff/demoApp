import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }                 from './app.component';
import { routing }                      from './app.routing';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './shared/nav-dropdown.directive';

import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './shared/sidebar.directive';
import { AsideToggleDirective }         from './shared/aside.directive';
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';


//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';

//Main view
import { DashboardComponent }           from './dashboard/dashboard.component';

//Components
import { MessageComponent }           from './components/message.component';
import { ButtonsComponent }           from './components/buttons.component';


//Pages
import { p404Component }                from './pages/404.component';
import { p500Component }                from './pages/500.component';
import { LoginComponent }               from './pages/login.component';
import { RegisterComponent }            from './pages/register.component';

//Service 
import FeathersBaseAPIService           from './shared/feathers-base-api.service';
import {MessageService}                 from './components/message.service';
import {UserService}                    from './shared/user.service';
import {CanActivateViaAuthGuard}        from './shared/canActivateViaAuthGuard';



@NgModule({
  declarations: [
    AppComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    FullLayoutComponent,
    SimpleLayoutComponent,
    DashboardComponent,
    p404Component,
    p500Component,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
    ButtonsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2BootstrapModule,
    ChartsModule
  ],
  providers: [
          FeathersBaseAPIService,
          MessageService,
          UserService,
          CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
