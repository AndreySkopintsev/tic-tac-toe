const container = document.querySelector('.container')
const xBtn = document.getElementById('choiceX')
const oBtn = document.getElementById('choiceO')
let playerSign
let computerSign

// Board module
const createGameboard = (() =>{
    
    let array = [['','',''],['','',''],['','','']]
    let board = document.createElement('div')
    board.classList.add('board')
    container.appendChild(board)
    

    const fillBoard = () => {
        board.innerHTML = ''
        for(let row in array){
            for(let cell in array[row]){
                let square = document.createElement('div')
                square.classList.add('square')
                square.setAttribute('data-row',row)
                square.setAttribute('data-cell',cell)
                square.textContent = array[row][cell]
                board.appendChild(square)
            }
        }
        boardFunctionality()
    }

    const boardFunctionality = () => {
        const cells = board.querySelectorAll('.square')
        cells.forEach(cell => {
            cell.addEventListener('click',()=> makeMove(playerSign,cell))
        })
    }

    const makeMove = (sign,cell) => {
        if(sign == 'x'){
            array[cell.dataset.row][cell.dataset.cell] = 'x'
            fillBoard()
        }else{
            array[cell.dataset.row][cell.dataset.cell] = 'o'
            fillBoard()
        }
    }

    fillBoard()
    
    return {array,fillBoard}
}
)();

// Player factory function
const Player = (sign) => {
    const makeMove = () => {
         createGameboard.array[row][cell] = sign
         console.log(createGameboard.array)
    } 

    return {makeMove,sign}
}

// Event listeners
xBtn.addEventListener('click',()=>{
    let playerX = Player('x')
    playerSign = playerX.sign
    computerSign = 'o'
    console.log(currentSign)
})


oBtn.addEventListener('click',()=>{
    let playerO = Player('o')
    playerSign = playerO.sign
    computerSign = 'x'
    console.log(currentSign)
})