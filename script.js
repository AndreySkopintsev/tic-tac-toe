const container = document.querySelector('.container')

const createGameboard = (() =>{
    let array = [['x','o','x'],['o','x','x'],['o','o','x']]
    const createBoard = () => {
        let board = document.createElement('div')
        board.classList.add('board')
        container.appendChild(board)
        fillBoard(board)
    }

    const fillBoard = (board) => {
        for(let row in array){
            for(let cell in array[row]){
                let square = document.createElement('div')
                square.classList.add('square')
                square.textContent = array[row][cell]
                board.appendChild(square)
            }
        }
    }
    
    return {array,createBoard}
}
)();

createGameboard.createBoard()