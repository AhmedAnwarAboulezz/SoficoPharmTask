import { RouterModule, Routes } from "@angular/router";
import { PersonListComponent } from './employee/person-list/person-list.component';
import { PersonProfileWithRoutingComponent } from './employee/person-profile-with-routing/person-profile-with-routing.component';


const appRoutes: Routes = [
    { path: '', component: PersonListComponent },
    { path: 'persons', component: PersonListComponent },
    { path: 'person/create', component: PersonProfileWithRoutingComponent },
    { path: 'person/edit/:id', component: PersonProfileWithRoutingComponent }

    // { path: 'employees/:empId/tasks', component: EmployeetaskListComponent },

 ];

 export const appRouting = RouterModule.forRoot(appRoutes);