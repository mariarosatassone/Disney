import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../classes/character';
import { TvShows } from '../classes/tv-shows';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {

  character: Character = new Character();
  tvShow: TvShows [] = [];




  constructor(private route: ActivatedRoute, private CharacterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.CharacterService.getTvShowById(data['_id']).subscribe(data => {
        this.character = data;
        this.tvShow = data.tvShows;
      })

    })

    
  }

}
