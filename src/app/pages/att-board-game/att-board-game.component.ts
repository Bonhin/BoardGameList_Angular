import Swal  from 'sweetalert2';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { BoardGameService } from './../../services/board-game.service';

import { BoardGame } from 'src/app/models/board-game';

@Component({
  selector: 'app-att-board-game',
  templateUrl: './att-board-game.component.html',
  styleUrls: ['./att-board-game.component.css']
})
export class AttBoardGameComponent implements OnInit {

  constructor(private BoardGameService: BoardGameService, private router: Router) { }

  @Input() attBoardGame?: BoardGame;

  boardGameForm?: FormGroup;

  ngOnInit(): void {
    if (BoardGameService.boardGameToEdit) {
      this.attBoardGame = BoardGameService.boardGameToEdit;
    }

    this.boardGameForm = new FormGroup({
      minimalAge: new FormControl(this.attBoardGame?.minimalAge),
      playTime: new FormControl(this.attBoardGame?.playTime),
      playersNumber: new FormControl(this.attBoardGame?.playersNumber),
      description: new FormControl(this.attBoardGame?.description),
    });
  }

  attItem() {

    if (this.attBoardGame) {
      this.attBoardGame.minimalAge = this.boardGameForm?.controls['minimalAge'].value;
      this.attBoardGame.playTime = this.boardGameForm?.controls['playTime'].value;
      this.attBoardGame.playersNumber = this.boardGameForm?.controls['playersNumber'].value;
      this.attBoardGame.description = this.boardGameForm?.controls['description'].value;

      this.BoardGameService.patchBoardGame(this.attBoardGame)
      Swal.fire(`${this.attBoardGame.title}`, 'Atualizado com Sucesso' ,'success').then((_)=>{
        this.goToList();
      });
      
    }
  }

  goToList() {
    this.router.navigate(['/list']);
  }

}
