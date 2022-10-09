import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories: Category[] | undefined;
  model: any = {
    categoryId: ''
  };

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      console.log(data)
      this.categories = data;
    })
  }

  movieForm = new FormGroup({
    title: new FormControl("film adı"),
    description: new FormControl("açıklama"),
    imageUrl: new FormControl("1.jpeg"),
    categoryId: new FormControl("2")
  })


  clearForm() {
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: ''
    });
  }

  createMovie() {

    // BackEnd E Eklenicek BackEnde Bağlanmalı
  }

  log(value: any) {
    console.log(value);
  }

}
