import { AttBoardGameComponent } from './pages/att-board-game/att-board-game.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardGameListComponent } from './pages/board-game-list/board-game-list.component';
import { BoardGameCreateComponent } from './pages/board-game-create/board-game-create.component';
import { PagesNotFoundComponent } from './pages/pages-not-found/pages-not-found.component';

const routes: Routes = [
  { path: "", redirectTo : "list", pathMatch: "full"},
  { path: "list", component : BoardGameListComponent},
  { path: "create", component: BoardGameCreateComponent},
  { path: "att", component: AttBoardGameComponent}, 
  { path: "**", component: PagesNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
