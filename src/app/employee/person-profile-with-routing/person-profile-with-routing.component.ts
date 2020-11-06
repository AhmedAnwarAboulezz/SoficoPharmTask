import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Person from 'src/app/models/Person';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-person-profile-with-routing',
  templateUrl: './person-profile-with-routing.component.html',
  styleUrls: ['./person-profile-with-routing.component.css']
})

export class PersonProfileWithRoutingComponent implements OnInit {
  isDisabled = false;
  person: Person = new Person();
  personId: number = null;

  constructor(
    private personService: PersonService, 
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.personId = this.route.snapshot.params.id;
    this.personId && this.getPersonData(this.personId);

  }
  getPersonData(id: number) {
    this.personService.getPersonsById(id).subscribe((response:any) => {
      this.person = response;
    });
  }

  handleSubmit() {
    if(this.person.name == ""  || this.person.dob == null
    || this.person.email == "" || this.person.avatar == ""){
      this.toastr.error('Please Fill Required Data First');
      return;
    }
    this.isDisabled = true;
    this.personId ? this.handleEdit() : this.handleCreate();
  }

  handleCreate() {
    debugger;
    this.personService.createPerson(this.person).subscribe(response => {
      this.toastr.success("Person Profile Created Successfully");
      this.person = new Person();
      this.isDisabled = false;
      this.router.navigate(['/persons/']);
     }, error =>{
        this.toastr.error('An Error happened during create');
    });
  }

  handleEdit() {
    this.personService.updatePerson(this.person).subscribe(response => {
      this.toastr.success("Person Profile Updated Successfully");
      this.router.navigate(['/persons/']);
     }, error =>{
      this.toastr.error('An Error happened during Update');
    });
  }
}
