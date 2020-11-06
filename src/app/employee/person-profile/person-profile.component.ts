import { Optional } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Person from 'src/app/models/Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})

// export class PersonProfileComponent implements OnInit {
//   constructor(
//     private personService: PersonService
//   ) {}

//   ngOnInit() {
//   }
// }
export class PersonProfileComponent implements OnInit {
  isDisabled = false;
  person: Person = new Person();
  personId: number = null;
  isNew = true;


  constructor(
    private personService: PersonService, 
    private toastr: ToastrService,
    private router: Router,
    public dialogRef: MatDialogRef<PersonProfileComponent>,
    public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
     debugger;
    if (this.data) {
      this.person = this.data;
      this.isNew = false;
    }
  }

  ngOnInit() {
  }



  handleSubmit() {
    this.isDisabled = true;
    // if(this.person.departmentId == 0 || this.person.departmentId == null){
    //   this.toastr.error('Please Select Department First');
    //   return;
    // }
  //   //
  this.isNew ? this.handleCreate() : this.handleEdit();
  }
  handleCreate() {
    debugger;
    this.personService.createPerson(this.person).subscribe(response => {
      this.toastr.success("Person Profile Created Successfully");
      this.person = new Person();
      this.isDisabled = false;
      this.onSaveForm();
      //this.router.navigate(['/persons/']);
     }, error =>{
        this.toastr.error('An Error happened during create');
    });
  }

  handleEdit() {
    this.personService.updatePerson(this.person).subscribe(response => {
      console.log(response);
      this.onSaveForm();
      //this.router.navigate(['/persons/']);
     }, error =>{
      this.toastr.error('An Error happened during create');
    });
  }



  onSaveForm(): void {
    this.dialogRef.close({ data: true });
}

}
