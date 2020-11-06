import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import Employee from 'src/app/models/Employee';
import { Shell } from 'src/app/shell';
import { PersonProfileComponent } from '../person-profile/person-profile.component';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})

export class PersonListComponent {
  employees: Employee[] = [
     {id:1,employeeNameAr:"AHMED",employeeNameEn:"Ahmed",isManager:true,joinDate: Date.now()},
     {id:2,employeeNameAr:"AHMED2",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:3,employeeNameAr:"AHMED3",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:4,employeeNameAr:"AHMED4",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:5,employeeNameAr:"AHMED5",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:6,employeeNameAr:"AHMED6",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:7,employeeNameAr:"AHMED7",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:8,employeeNameAr:"AHMED8",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:9,employeeNameAr:"AHMED9",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:10,employeeNameAr:"AHMED10",employeeNameEn:"Ahmed2",isManager:false,joinDate: Date.now()},
     {id:11,employeeNameAr:"AHMED11",employeeNameEn:"Ahmed2",isManager:true,joinDate: Date.now()}
  ];
  isLoading: boolean = false;
  get MatDialog(): MatDialog { return Shell.Injector.get(MatDialog); }

  constructor(
    private employee_service: PersonService,
    private toast: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    //const refrence = this.employee_service.getPersons();
    this.employee_service.getPersons().subscribe((response: any) => {
      console.log("All persons = ", response);
      
      // this.employees = response;
      // this.isLoading = false;
      // console.log("emplyees", this.employees);
    });
    console.log("emplyees", this.employees);
  }

  addEvent(model: any) {
    debugger;
    this.add(PersonProfileComponent, model);
  }


  // handleDelete(id) {
  //   const confirmed = confirm('Are You Sure You Wanna Delete This Item?');
  //   confirmed &&
  //   this.employee_service.deleteEmployee(id)
  //   .subscribe(response => {
  //     this.employees = this.employees.filter(employee => employee.id != id);
  //     this.toast.success('Employee Was Deleted');
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
      console.log(`Dialog result: ${result}`);
    });
  }
}
