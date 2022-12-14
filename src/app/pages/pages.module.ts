import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { BoardGameListComponent } from './board-game-list/board-game-list.component';
import { BoardGameItemComponent } from './board-game-list/board-game-item/board-game-item.component';
import { BoardGameCreateComponent } from './board-game-create/board-game-create.component';
import { PagesNotFoundComponent } from './pages-not-found/pages-not-found.component';
import { AttBoardGameComponent } from './att-board-game/att-board-game.component';





@NgModule({
  declarations: [
    BoardGameListComponent,
    BoardGameItemComponent,
    BoardGameCreateComponent,
    PagesNotFoundComponent,
    AttBoardGameComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    BoardGameListComponent,
    BoardGameItemComponent,
  ]
})
export class PagesModule { }
