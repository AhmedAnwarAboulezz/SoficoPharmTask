import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import Employee from 'src/app/models/Employee';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})

export class PersonProfileComponent implements OnInit {
  constructor(
    private personService: PersonService
  ) {}

  ngOnInit() {
  }
}
// export class PersonProfileComponent implements OnInit {
//   isDisabled = false;
//   employee: Employee = new Employee();
//   employeeId: number = null;

//   constructor(
//     private employeeService: PersonService, 
//     private toastr: ToastrService,
//     private router: Router,
//     private route: ActivatedRoute,
//   ) {}

//   ngOnInit() {
//     // this.employeeId = this.route.snapshot.params.id;
//   }



//   handleSubmit() {
//     this.isDisabled = true;
//     // if(this.employee.departmentId == 0 || this.employee.departmentId == null){
//     //   this.toastr.error('Please Select Department First');
//     //   return;
//     // }
//   //   //
//   }
// }
