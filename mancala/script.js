// document.addEventListener('DOMContentLoaded', function(){
//
// });

class GameBoard{
    constructor({creator}){
        this.creator = creator;
        this.board = [[0,4,4,4,4,4,4],[4,4,4,4,4,4,0]];
    }

    selectSpot(){
        return 'piece selected'
    }
}
const mancala = new GameBoard({creator: 'Khanh'});
mancala.selectSpot();