import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {
  title: string = 'Example of pipe expression';
  showDt: Date = new Date();

  //  Task - Implementing the built-in pipes
  employees = [
    { name: 'userA', state: 'california', salary: 50000 },
    { name: 'userB', state: 'new york', salary: 50000 },
    { name: 'userC', state: 'texas', salary: 50000 },
    { name: 'userD', state: 'pennsylvania', salary: 50000 },
  ];
}

/**
async
lowercase
uppercase
json
filter
orderBy
map
percent
date
currency
slice
join
 */
