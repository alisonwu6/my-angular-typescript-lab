import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grouping-elements',
  imports: [CommonModule, FormsModule],
  templateUrl: './grouping-elements.component.html',
  styleUrl: './grouping-elements.component.scss',
})
export class GroupingElementsComponent {
  // 39. Grouping elements with ng-container
  subjectList = [
    {
      subCode: 101,
      name: 'JavaScript',
    },
    {
      // subCode: 102,
      name: 'C++',
    },
    {
      subCode: 103,
      name: 'NestJS',
    },
  ];

  // 40. HTML templates with ng-template
  isAuthorized: boolean = false;

  listItems: string[] = ['item 1', 'item 2', 'item 3', 'item 4'];

  // 42. Task - Display msg if input remains empty (ng-container & ng-template)
  user: string = '';

  // 43. Rendering templates with ngTemplateOutlet - Part 1
  a: number = 10;
  b: number = 20;
  showDetails = {
    name: "Alison", 
    age: 10,
    location: "Brisbane"
  }

  calc() {
    return this.a + this.b;
  }

  // 44. Rendering templates with ngTemplateOutlet using `$implicit`- Part 2
  employees = [
    {id: 1, name: 'User A', salary: 4500},
    {id: 2, name: 'User B', salary: 7500},
    {id: 3, name: 'User C', salary: 5500},
  ];
}
