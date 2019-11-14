import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[] =[
    new Recipe('recipe-name1','recipe-desc1','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy-VYIUlJc-emqtqidd5qiRPrWFOvRqyputvKybENnZ6lZjArP'),
    new Recipe('recipe-name2','recipe-desc2','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy-VYIUlJc-emqtqidd5qiRPrWFOvRqyputvKybENnZ6lZjArP')
  ]
  constructor() { }

  ngOnInit() {
  }

}
