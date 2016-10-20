import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import {CanActivateViaAuthGuard}        from './shared/canActivateViaAuthGuard';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard'
                },
                canActivate: [
                                CanActivateViaAuthGuard
                            ]
            },
            {
                path: 'components',
                redirectTo: 'components/buttons',
                pathMatch: 'full',
            },
            {
                path: 'components',
                data: {
                    title: 'Components'
                },
                children: [
                   {
                        path: 'buttons',
                        component: ButtonsComponent,
                        data: {
                            title: 'Buttons'
                        }
                    },
                    {
                        path: 'cards',
                        component: MessageComponent,
                        data: {
                            title: 'cards'
                        }
                    }, 
                ]
            },
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '404',
                component: p404Component,
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: p500Component,
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClientAppRoutingModule { }
*/
export const routing = RouterModule.forRoot(appRoutes);
