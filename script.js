const container = document.querySelector('.container')
const xBtn = document.getElementById('choiceX')
const oBtn = document.getElementById('choiceO')
let player

// Board module
const createGameboard = (() =>{
    let playerSign 
    let computerSign
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
        console.log(!array[cell.dataset.row][cell.dataset.cell])
        if(sign == 'x' && !array[cell.dataset.row][cell.dataset.cell]){
            array[cell.dataset.row][cell.dataset.cell] = 'x'
            fillBoard()
        }else if(sign == 'o' && !array[cell.dataset.row][cell.dataset.cell]){
            array[cell.dataset.row][cell.dataset.cell] = 'o'
            fillBoard()
        }
    }

    const setSigns = (sign) => {
        playerSign = sign
        computerSign = sign == 'x' ? 'o' : 'x'
        console.log(playerSign)
        console.log(computerSign)
    }

    fillBoard()
    
    return {array,fillBoard,setSigns}
}
)();

// Player factory function
const Player = (sign) => {
    let playerSign = sign

    const makeMove = () => {
         createGameboard.array[row][cell] = sign
         console.log(createGameboard.array)
    } 

    const getSign = () => {
        return playerSign
    }

    return {makeMove,getSign}
}

// Event listeners
xBtn.addEventListener('click',()=>{
    let player = Player('x')
    createGameboard.setSigns(player.getSign())
})


oBtn.addEventListener('click',()=>{
    let player = Player('o')
    createGameboard.setSigns(player.getSign())
})