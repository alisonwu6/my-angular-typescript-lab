import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  id: string = '';
  name: string = '';

  /**
      As this route class contains information about the route parameters, query parameters, and other metadata associated with the route. 
      And with the help of its methods, we can easily fetch the route information.
  */
  constructor(private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.id = params['id'];
    this.name = params['name'];
    console.log(`Emp_Id: ${this.id}, Emp_Name: ${this.name}`);
  }
}
