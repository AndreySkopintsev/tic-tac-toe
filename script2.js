// Filling the board with squares
(()=>{
    const container = document.querySelector('.container') 
    const boardDiv = document.createElement('div') 
    boardDiv.classList.add('board')
    container.appendChild(boardDiv)

    const fillBoard = () => {
        for(let i=0;i<9;i++){
            let square = document.createElement('div')
            square.classList.add('square')
            square.setAttribute('data-cell',i)
            boardDiv.appendChild(square)
        }
    }

    fillBoard()
})()

// Game controller
const gameController = (()=>{
    let boardArray = ['','','','','','','','','']
    const squares = document.querySelectorAll('.square')
    let sign = 'x'
    
    // Hooking up clickability to squares
    const squareFunctionality = () =>{
        squares.forEach(square => {
            square.addEventListener('click',(e)=>{
                let cell = e.target.getAttribute('data-cell')
                console.log(boardArray[cell])
                fillCell(sign,cell)
            })
        })
    }

    // Displaying array
    const displayArray = ()=>{
        squares.forEach(square=>{
            let row = square.getAttribute('data-row')
            let cell = square.getAttribute('data-cell')
            square.textContent = boardArray[cell]
        })
    }


    squareFunctionality()

    // Filling array cell
    const fillCell = (mark,cell) => {
        boardArray[cell] = mark
        mark == 'x' ? sign = 'o' : sign = 'x'
        displayArray()
    }

    // Check winner
    const checkWinner = ()=>{
    }
    
    return {fillCell}
})()