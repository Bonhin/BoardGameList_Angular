export class BoardGame{
    static lastId: number = 4;

    id: number;
    title?: string;
    minimalAge?: number;
    playTime?: number;
    playersNumber?: number;
    description?: string;
    have:boolean;
    want:boolean;

    constructor(title?:string, minimalAge?: number, playtime?: number, playersNumber?: number, descrption?: string, have: boolean = false, want: boolean = false){

        this.title = title;
        this.minimalAge = minimalAge;
        this.playTime = playtime;
        this.playersNumber = playersNumber;
        this.description = descrption;
        this.have = have;
        this.want = want;

        this.id = BoardGame.updateLastId();
    }

    static updateLastId(id?: number): number {
        return ++this.lastId;
    }
}
