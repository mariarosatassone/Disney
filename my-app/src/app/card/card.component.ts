import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../classes/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  character: Character [] = [];

  constructor(private CharacterService: CharacterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.CharacterService.getAllCharacter().subscribe(data => {
      this.character = data.data;
    })

  }

  TvShow(item:Character) {
    this.router.navigate(['card', item._id])
  }

}
