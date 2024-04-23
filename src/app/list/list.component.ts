import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { IArticle } from '../IArticle';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    @Input() propArticles:IArticle[] =[];
    @Output() newUpdatedArticles = new EventEmitter<number>();
    removeArticle(article:IArticle){
      let indice = this.propArticles.indexOf(article);
      this.newUpdatedArticles.emit(indice);
    }
}
