import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  imports: [CommonModule],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.scss',
})
export class PageNavigationComponent {
  products: { name: string; imageUrl: string }[] = [
    {
      name: 'Mastering CSS with Sass & Bootstrap + Interview Questions',
      imageUrl: 'assets/Html-CSS.jpg',
    },
    {
      name: 'Mastering Angular + Angular 19 + Interview + E-commerce App',
      imageUrl: 'assets/Angular.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: 'assets/JS_Course.png',
    },
    {
      name: 'Mastering React With Interview Questions, eStore Project',
      imageUrl: 'assets/React_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: 'assets/TypeScript.jpg',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: 'assets/RDBMS.png',
    },
    {
      name: 'Mastering Bun - The Modern Fullstack Development',
      imageUrl: 'assets/Bun.jpg',
    },
    {
      name: 'Mastering NestJS',
      imageUrl: 'assets/NestJS.jpg',
    },
  ];

  pgSize: number = 2;
  startIndex: number = 0;
  endIndex: number = this.pgSize;

  previousPage() {
    if (this.startIndex > 0) {
      this.startIndex -= this.pgSize;
      this.endIndex -= this.pgSize;
    }
  }

  nextPage() {
    if (this.endIndex < this.products.length) {
      this.startIndex += this.pgSize;
      this.endIndex += this.pgSize;
    }
  }
}
