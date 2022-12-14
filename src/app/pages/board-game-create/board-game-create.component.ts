import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { BoardGameService } from './../../services/board-game.service';

import { BoardGame } from 'src/app/models/board-game';

@Component({
  selector: 'app-board-game-create',
  templateUrl: './board-game-create.component.html',
  styleUrls: ['./board-game-create.component.css']
})
export class BoardGameCreateComponent implements OnInit {

  constructor(private BoardGameService: BoardGameService,  private router: Router) { }

  @Input() newBoardGame: BoardGame = new BoardGame()

  boardGameForm?: FormGroup;

  ngOnInit(): void {
    this.boardGameForm = new FormGroup({
      title: new FormControl(this.newBoardGame.title),
      minimalAge: new FormControl(this.newBoardGame.minimalAge),
      playTime: new FormControl(this.newBoardGame.playTime),
      playersNumber: new FormControl(this.newBoardGame.playersNumber),
      description: new FormControl(this.newBoardGame.description),
      have: new FormControl(false),
      want: new FormControl(false),
    });
  }

  SubmitForm() {

    this.newBoardGame.title = this.boardGameForm?.controls['title'].value;
    this.newBoardGame.minimalAge = this.boardGameForm?.controls['minimalAge'].value;
    this.newBoardGame.playTime = this.boardGameForm?.controls['playTime'].value;
    this.newBoardGame.playersNumber = this.boardGameForm?.controls['playersNumber'].value;
    this.newBoardGame.description = this.boardGameForm?.controls['description'].value;
    this.newBoardGame.have = this.boardGameForm?.controls['have'].value;
    this.newBoardGame.want = this.boardGameForm?.controls['want'].value;

    this.newBoardGame = {id: this.newBoardGame.id, ...this.boardGameForm?.value};

    this.BoardGameService.postBoardGame(this.newBoardGame);
  }

  goToList() {
    this.router.navigate(['/list']);
  }
}

