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
