
import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BoardGame } from '../models/board-game';

@Injectable({
  providedIn: 'root'
})
export class BoardGameService  {
 
  constructor() { 
    BoardGame.updateLastId(this.boardGameList[this.boardGameList.length-1].id)
  }

  testList: BoardGame[]=[]


  static boardGameToEdit: BoardGame;

  boardGameList: BoardGame[] = [

    {
      id:1,
      title: "Gloomhaven",
      minimalAge: 12,
      playTime: 120,
      playersNumber: 1,
      description: "Gloomhaven é um jogo de combate tático inspirado em Euros, em um mundo persistente em mudança. Os jogadores assumirão o papel de um aventureiro errante com seu próprio conjunto especial de habilidades e suas próprias razões para viajar para este escuro canto do mundo. Os jogadores têm de trabalhar em conjunto em caso de necessidade para limpar dungeons ameaçadoras e ruínas esquecidas. No processo, eles melhorarão suas habilidades com experiência e pilhagem, descobrindo novos locais para explorar e saquear, e expandindo a história pelas decisões que tomarem.",
      have:false,
      want:false
    },
    {
      id:2,
      title: "Dominant Species Marine",
      minimalAge: 14,
      playTime: 150,
      playersNumber: 2,
      description: "Dominant Species: Marine é um jogo que recria abstratamente uma pequena porção da história antiga: o fim de uma era glacial onerosa e o que isso implica para os seres vivos que tentam se adaptar à terra que muda lentamente. Cada jogador assumirá o papel de uma das quatro principais classes de animais aquáticos - dinossauro, peixe, cefalópode ou crustáceo. Cada um começa o jogo mais ou menos em um estado de equilíbrio natural em relação ao outro. Mas isso não vai durar: é de fato sobrevivência do mais apto",
      have:false,
      want:false
    },
    {
      id:3,
      title: "Ilha dos Dinoussauros",
      minimalAge: 10,
      playTime: 120,
      playersNumber: 1,
      description: "Em Ilha dos Dinossauros, os jogadores terão que coletar DNA, pesquisar as sequências de DNA de espécies de dinossauros extintas e, em seguida, combinar o DNA antigo na sequência correta para trazer essas criaturas pré-históricas de volta à vida. Todos os jogadores irão competir para construir o parque mais emocionante de cada temporada, e depois trabalhar para atrair (e manter vivo!) o maior número de visitantes a cada temporada que o parque abre.",
      have:false,
      want:false
    },
    {
      id:4,
      title: "Cascadia",
      minimalAge: 14,
      playTime: 45,
      playersNumber: 1,
      description: " Os jogadores se revezam construindo sua própria área de terreno e povoando-a com vida selvagem. Os jogadores devem criar um ecossistema diversificado e harmonioso, pois cada espécie animal tem uma preferência espacial diferente, e cada habitat deve ser colocado para reduzir a fragmentação e criar corredores de vida selvagem. Cascadia envolve um quebra-cabeça de camada dupla único que avança ao longo do tempo conforme mais habitats e vida selvagem são adicionados ao ecossistema individual de cada jogador. Os jogadores marcam pontos criando os arranjos espaciais mais harmoniosos da vida selvagem e também criando os maiores corredores de habitat contíguos.",
      have:false,
      want:false
    }
  ]
   
  getBoardGame(): BoardGame[] {
    return this.boardGameList;
  }

  postBoardGame(newBoardGame : BoardGame): void {
    this.boardGameList.push(newBoardGame);
  }

  deleteBoardGame(id:number):void{
    const index = this.boardGameList.findIndex((boardGame) => boardGame.id == id);
    this.boardGameList.splice(index, 1);
  }

  patchBoardGame(boardGameById: BoardGame) : void {    
      const index = this.boardGameList?.findIndex((boardGameItem) => boardGameItem?.id == boardGameById.id);
      this.boardGameList[index] = boardGameById;
  }
 
}
