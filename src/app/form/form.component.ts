import { Component, EventEmitter, Output } from '@angular/core';
import { IArticle } from '../IArticle';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() newUpdatedArticlesForm = new EventEmitter<IArticle>();
   title: string ="";
   content: string ="";
  
  newArticle:IArticle ={
    title:this.title,
    content:this.content
  };

  clearForm():void{
    this.title = "";
    this.content = "";
  }

  addArticle(){
    if(this.title !== "" || this.content !== ""){
      this.newUpdatedArticlesForm.emit(
        {
        title:this.title,
        content:this.content
        }
      )
    }
    alert("Remplie le formulaire");
    this.clearForm();
}

}
