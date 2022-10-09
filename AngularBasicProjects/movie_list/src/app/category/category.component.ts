import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: Category[] | undefined;
  selectedCategory: Category = {};

  constructor(private categoryService: CategoryService) { }



  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    })
  }

  displayAll = true;

  // Select Method
  selectCategory(item?: Category) {
    if(item) {
      this.selectedCategory = item;
      this.displayAll = false;
    } else {
      this.selectedCategory = {};
      this.displayAll = true;
    }
  }




  /* 
  errorMessage(error:any){
        this.messageService.add(error)
  } */

}
