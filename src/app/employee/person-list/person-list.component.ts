import { Component, OnInit } from '@angular/core';
import { MatDialog, MatRadioChange } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import Person from 'src/app/models/Person';
import { Shell } from 'src/app/shell';
import { PersonProfileComponent } from '../person-profile/person-profile.component';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})

export class PersonListComponent {
  persons: Person[] = [];
  isLoading: boolean = true;
  isPopup: boolean = false;

  get MatDialog(): MatDialog { return Shell.Injector.get(MatDialog); }

  constructor(
    private person_service: PersonService,
    private toast: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons()
  {
    this.isLoading = true;
    this.person_service.getPersons().subscribe((response: any) => {
      console.log("All persons = ", response);      
       this.persons = response;
       this.isLoading = false;
    });
  }
  addEvent(model: any | null)
  {
    this.add(PersonProfileComponent, model);
  }

  radioChange(event: MatRadioChange) 
  {
       this.isPopup =  event.value == 2 ? true : false;
  }


  // handleDelete(id) {
  //   const confirmed = confirm('Are You Sure You Wanna Delete This Item?');
  //   confirmed &&
  //   this.person_service.deletePerson(id)
  //   .subscribe(response => {
  //     this.persons = this.persons.filter(person => person.id != id);
  //     this.toast.success('Person Was Deleted');
  //   });
  // }

  add(dialog: any, data: any, width = '800px',height?:any) {
    this.openDialog(dialog, data, width,height);
  }
  protected openDialog(dialog: any, data: any, width: any, height?:any): void {
    const dialogRef = this.dialog.open(dialog, {
      height,
      width,
      data,
      panelClass: 'my-dialog',
      direction: ('ltr'),
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if (result == null || result == undefined || result.data == false) 
      {  return;  }


      this.getAllPersons();
      console.log(`Dialog result: ${result}`);
    });
  }
}
