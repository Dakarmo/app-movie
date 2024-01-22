import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

trendingMovies: any;
theatreMovies: any;
popularMovies: any;


  constructor(private http: HttpClient, private router: Router){

  }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheaterMovies();
    this.getPopularMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
    this.trendingMovies = movies;

    });
  }
  getTheaterMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
    this.theatreMovies = movies;

    });
  }
  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
    this.popularMovies = movies;

    });
  }

  goToMovie(type: string, id: string) {
     this.router.navigate(['movie', type, id])
  }

}
