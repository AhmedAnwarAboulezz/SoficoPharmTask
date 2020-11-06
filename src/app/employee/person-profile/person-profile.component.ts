import { Optional } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import Person from 'src/app/models/Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})

export class PersonProfileComponent implements OnInit {
  isDisabled = false;
  person: Person = new Person();
  personId: number = null;
  isNew = true;


  constructor(
    private personService: PersonService, 
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<PersonProfileComponent>,
    public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.person = this.data;
      this.isNew = false;
    }
  }

  ngOnInit() {
  }



  handleSubmit() {
    if(this.person.name == ""  || this.person.dob == null
    || this.person.email == "" || this.person.avatar == ""){
      this.toastr.error('Please Fill Required Data First');
      return;
    }
    this.isDisabled = true;
    this.isNew ? this.handleCreate() : this.handleEdit();
  }
  handleCreate() {
    this.personService.createPerson(this.person).subscribe(response => {
      this.toastr.success("Person Profile Created Successfully");
      this.person = new Person();
      this.isDisabled = false;
      this.onSaveForm();
     }, error =>{
        this.toastr.error('An Error happened during create');
    });
  }

  handleEdit() {
    this.personService.updatePerson(this.person).subscribe(response => {
      console.log(response);
      this.toastr.success("Person Profile Edited Successfully");
      this.onSaveForm();
     }, error =>{
      this.toastr.error('An Error happened during Update');
    });
  }



  onSaveForm(): void {
    this.dialogRef.close({ data: true });
}

}
