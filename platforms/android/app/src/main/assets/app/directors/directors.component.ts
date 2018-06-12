import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectorService } from '../director.service';

@Component({
    selector: 'my-directors',
    templateUrl: './directors/directors.component.html'
})
export class DirectorsComponent {
  public directors: Array<any>;

  constructor(private router: Router, private directorService: DirectorService) {
  }

  ngOnInit() {
    this.directors = this.directorService.getDirectors();
  }

  navigateToDetails(name: string) {
    this.router.navigate([
      '/home', { outlets: { directoroutlet: ['directors', name] } }
    ])
  }
}