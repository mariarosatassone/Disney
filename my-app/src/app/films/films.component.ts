import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../classes/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {



  constructor(private route: ActivatedRoute, private CharacterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
