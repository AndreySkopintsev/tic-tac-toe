const container = document.querySelector('.container')

let row
let cell

const createGameboard = (() =>{
    let array = [['','',''],['','',''],['','','']]
    let board = document.createElement('div')
    board.classList.add('board')
    container.appendChild(board)
    

    const fillBoard = () => {
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
            cell.addEventListener('click',()=>{
                row = cell.dataset.row
                cell = cell.dataset.cell
                console.log({row,cell})
            })
        })
    }

    let fill =  fillBoard
    fill()
    
    return {array}
}
)();

const Player = (sign) => {
    const makeMove = () => {
         createGameboard.array[row][cell] = sign
         console.log(createGameboard.array)
    } 

    return {makeMove}
}

let playerX = Player('x')