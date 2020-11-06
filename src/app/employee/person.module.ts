import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { PersonProfileWithRoutingComponent } from './person-profile-with-routing/person-profile-with-routing.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonProfileComponent,
    PersonProfileWithRoutingComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  exports: [],
  entryComponents:[ PersonProfileComponent ],
  providers: [PersonService]
})
export class PersonModule {}
