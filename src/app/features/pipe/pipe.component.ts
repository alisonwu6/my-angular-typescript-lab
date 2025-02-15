import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppendTextPipe } from '../../shared/pipes/append-text/append-text.pipe';
import { SortNumbersPipe } from '../../shared/pipes/sort-numbers/sort-numbers.pipe';
import { LetterCountPipe } from '../../shared/pipes/letter-count/letter-count.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe',
  imports: [
    CommonModule,
    AppendTextPipe,
    SortNumbersPipe,
    LetterCountPipe,
    FormsModule,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {
  title: string = 'Example of pipe expression';
  showDt: Date = new Date();

  //  83. Task - Implementing the built-in pipes
  employees = [
    { name: 'userA', state: 'california', salary: 50000 },
    { name: 'userB', state: 'new york', salary: 50000 },
    { name: 'userC', state: 'texas', salary: 50000 },
    { name: 'userD', state: 'pennsylvania', salary: 50000 },
  ];

  // 84. Understanding Slice Pipe
  sliceArr = ['ItemA', 'ItemB', 'ItemC', 'ItemD'];

  // 87. Understanding Number pipe
  pi: number = 3.14159;

  // 93. Task - Creating Custom Pipe For Sorting Numbers
  numbers: number[] = [3, 5, 1, 4, 2];
  sortOrder: 'asc' | 'desc' = 'asc';
  showList: boolean = false;

  showSorting() {
    this.showList = true;
  }

  // 94. Task - Creating Custom Pipe For Letter Count
  stringVal: string = '';
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
