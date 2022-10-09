import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie | undefined;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.movieService.getMovieById(params["movieId"]).subscribe(data => {
        this.movie= data;
      })
    })
  }


  /* 
  errorMessage(error:any){
        this.messageService.add(error)
  } */

}
