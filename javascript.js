let turnNo = 0;

//constructor function? is it necessary?
function Player(name){
    this.name = name;
}
//below function makes use of constructor and spits out the name of the player? 

function bookPlayer(){
    let Player1 = new Player(document.querySelector('#player1').value);
    let Player2 = new Player(document.querySelector('#player2').value);
    return{Player1, Player2}
}
//empty array to save the game board
let gameboard=['a','b','c','d','e','f','g','h','i'];



function display(n){
    let box= document.querySelector(`.box${n}`);
    let div= document.createElement('div');  
    let cellid = document.querySelector(`#cellid${n}`);
    //display of spot or mark
    if (turnNo < 9 && cellid === null){  //cellid ===null condition so that each mark is in unique box
        if (turnNo%2 ==0){
            turnNo++;
            div.textContent='X';
            div.setAttribute('id', `cellid${n}`);
            gameplay(n, 'X');
        }
        else {
            div.textContent='O';
            div.setAttribute('id', `cellid${n}`);
            turnNo++;
            gameplay(n, 'O');
        }
    box.appendChild(div);
    }    
    //logic of winning after move no 5
    if (turnNo > 0 && turnNo <9){
        console.log(gameboard);
        let mark = gameboard[0].move;
        let mark2 = gameboard[5].move;
        let mark3 = gameboard[7].move;
        let mark4 = gameboard[4].move;
                
        if (gameboard[0].move == mark && gameboard[4].move == mark && gameboard[8].move == mark){  
            Winner(gameboard[4].move);
        }
        if(gameboard[0].move == mark && gameboard[1].move == mark && gameboard[2].move == mark){               
            console.log('if2')
            Winner(gameboard[1].move);
        }   
        if(gameboard[0].move == mark && gameboard[3].move == mark && gameboard[6].move == mark){               
            Winner(gameboard[3].move);
        }       
        if(gameboard[2].move == mark4 && gameboard[4].move == mark4 && gameboard[6].move == mark4){               
            Winner(gameboard[4].move);
        }   
        if(gameboard[2].move == mark2 && gameboard[5].move == mark2 && gameboard[8].move == mark2){               
             Winner(gameboard[2].move);
        }          
        if(gameboard[1].move == mark4 && gameboard[4].move == mark4 && gameboard[7].move == mark4){               
            Winner(gameboard[1].move);
        }
        if(gameboard[6].move == mark3 && gameboard[7].move == mark3 && gameboard[8].move == mark3){               
            Winner(gameboard[7].move);
        }
        if(gameboard[5].move == mark4 && gameboard[4].move == mark4 && gameboard[3].move == mark4){               
            Winner(gameboard[4].move);   
        }
    }
    if (turnNo == 9){
        Winner('Tie');
    }   
    
}

//below function to move the moves from display function into the empty array
function gameplay(n, mark){
    let boxNo = `box${n}`;
    let moveObject = {cell:boxNo, move:mark};
    gameboard.splice(n-1, 1, moveObject);
}

//function for winner announcement
function Winner(mark){
    let announce= document.querySelector('.announce');
    let p = document.createElement('p');
    if (mark == 'X'){
        console.log('Winner is X');
        p.textContent= 'X is the Winner';  
    }
    else if (mark == 'O'){
        console.log('Winner is  O');
        p.textContent= 'O is the Winner';
    }
    else if (mark =='Tie'){
        console.log('It is a Tie');
        p.textContent= 'It is a Tie';
    }
    announce.appendChild(p);
}