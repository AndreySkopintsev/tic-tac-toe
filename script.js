

// Board module
const createGameboard = (() =>{
    const container = document.querySelector('.container')
    const choiceBtns = document.querySelectorAll('.choiceBtn')
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
        
        if(sign == 'x' && !array[cell.dataset.row][cell.dataset.cell]){
            array[cell.dataset.row][cell.dataset.cell] = 'x'
            // playerSign = 'o'
            computerMove()
            fillBoard()
        }else if(sign == 'o' && !array[cell.dataset.row][cell.dataset.cell]){
            array[cell.dataset.row][cell.dataset.cell] = 'o'
            // playerSign = 'x'
            computerMove()
            fillBoard()
        }
    }

    choiceBtns.forEach(btn => {
        btn.addEventListener('click',()=>{
            console.log(btn.textContent)
            let player = Player(`${btn.textContent}`)
            createGameboard.setSigns(player.getSign())
            choiceBtns.forEach(btn => btn.disabled = true)
        })
        
    })

    const computerMove = () => {
        let row = Math.floor(Math.random()*3)
        let cell = Math.floor(Math.random()*3)
        if(!array[row][cell]){
            array[row][cell] = computerSign
        }else{
            row = Math.floor(Math.random()*3)
            cell = Math.floor(Math.random()*3)
            array[row][cell] = computerSign
        }
    }

    const setSigns = (sign) => {
        playerSign = sign
        computerSign = sign == 'x' ? 'o' : 'x'
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
    } 

    const getSign = () => {
        return playerSign
    }

    return {makeMove,getSign}
}

// Event listeners

