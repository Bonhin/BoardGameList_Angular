
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { BoardGameService } from './../../../services/board-game.service';

import { BoardGame } from 'src/app/models/board-game';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-board-game-item',
  templateUrl: './board-game-item.component.html',
  styleUrls: ['./board-game-item.component.css']
})
export class BoardGameItemComponent {

  @Input() boardGame?: BoardGame;

  constructor(private boardGameService: BoardGameService, public router: Router) { }

  setColor(): string {
    if (this.boardGame?.have == true) return "lightgreen";
    if (this.boardGame?.want == true) return "lightpink";
    if (this.boardGame?.have == false && this.boardGame?.want == false) return "white";
    else return ""
  }

  changeHaveStatus() {
    if (this.boardGame) {
      this.boardGame.have = !this.boardGame?.have;
      this.boardGame.want = false;
    }
  }

  changeWantStatus() {
    if (this.boardGame) {
      this.boardGame.want = !this.boardGame?.want;
      this.boardGame.have = false;
    }
  }

  deleteItem() {
    if (this.boardGame)
      this.boardGameService.deleteBoardGame(this.boardGame.id)
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Tem certeza que gostaria de excluir?',
      text: 'Essa ação é irreversível.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        this.deleteItem();
        Swal.fire('Excluido', 'O item foi excluido com sucesso.', 'success');
      }  
    });
  }

  goToAtt() {
    if (this.boardGame)
      BoardGameService.boardGameToEdit = this.boardGame;
    this.router.navigate(['/att']);

  }

}
