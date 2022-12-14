import { BoardGameService } from './../../services/board-game.service';
import { BoardGame } from 'src/app/models/board-game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-game-list',
  templateUrl: './board-game-list.component.html',
  styleUrls: ['./board-game-list.component.css']
})
export class BoardGameListComponent implements OnInit{

  testList: BoardGame[]=[]

  boardGameList: BoardGame[] = [];

  constructor(private BoardGameService: BoardGameService) { }

  ngOnInit(): void {
    this.boardGameList = this.BoardGameService.getBoardGame();
  }

}
