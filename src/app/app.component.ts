import { Component } from '@angular/core';
import { IArticle } from './IArticle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'InputOutput';
  // why let var not working???
  articles: IArticle[] = [
    { title: 'First Article', content: 'Content of the first article.' },
    { title: 'Second Article', content: 'Content of the second article.' },
    { title: 'Third Article', content: 'Content of the third article.' }
  ];

  receiveArticle(indice: number) {
    this.articles.splice(indice,1);
    console.log("articles from base : ");
    console.log(this.articles);
  }

  receiveArticleForm(oneArticle: IArticle) {
    this.articles.push(oneArticle);
  }
}